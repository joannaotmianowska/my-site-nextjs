import { getAllNewslettersIds, getNewslettersData } from '@/lib/newsletters';
import Link from 'next/link';

export default async function Newsletter() {
  const newsletters = getAllNewslettersIds();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex'>
        <div>
          <h1 className='text-4xl   mb-8 text-center'>
            Archiwalne newslettery
          </h1>
          <ul>
            {newsletters.map(async (newsletter: any) => {
              const data = await getNewslettersData(newsletter.params.id);
              return (
                <li key={newsletter.params.id} className='mb-5'>
                  <Link
                    href={`/newsletter/${newsletter.params.id}`}
                    className='hover:  underline'
                  >
                    <h3 className='text-xl   p-1 m-1'>{data.title}</h3>
                  </Link>
                  <p>
                    {data.keywords.map((topic: string) => (
                      <span
                        className='border border-violet-300 rounded-lg bg-violet-300 p-1 m-1 shadow-sm'
                        key={topic}
                      >
                        {topic}{' '}
                      </span>
                    ))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
