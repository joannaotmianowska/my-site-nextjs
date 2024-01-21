import { getAllNewslettersIds, getNewslettersData } from '@/lib/newsletters';
import Link from 'next/link';

export default async function Newsletter() {
  const newsletters = getAllNewslettersIds();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex'>
        <div>
          <h1 className='text-4xl font-bold'>Archiwalne newslettery</h1>
          <ul>
            {newsletters.map(async (newsletter: any) => {
              const data = await getNewslettersData(newsletter.params.id);
              return (
                <li key={newsletter.params.id}>
                  <Link
                    href={`/newsletter/${newsletter.params.id}`}
                    className='hover:font-bold underline'
                  >
                    <h3>{data.title}</h3>
                  </Link>
                  <p>{data.keywords.map((topic: string) => <span className='border border-sky-400 rounded-lg bg-sky-400 p-0.5 m-0.5' key={topic}>{topic} </span>)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}