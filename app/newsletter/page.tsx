import { getAllNewslettersSlugs } from "@/lib/newsletters";
import Link from 'next/link';

export default function Newsletter() {
  const newsletters = getAllNewslettersSlugs();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex'>
        <div>
          <h1 className='text-4xl font-bold'>Archiwalne newslettery</h1>
          <ul className='list-disc list-inside'>
            {newsletters.map((newsletter: any) => {
              return (
              <li key={newsletter.params.id}>
                <Link 
                  href={`/newsletter/${newsletter.params.id}`}
                  className='hover:font-bold underline'
                >
                  {newsletter.params.id}
                </Link>
              </li>
            )})}
          </ul>
      </div>
      </div>
    </main>
  );
}