import { getAllNewslettersSlugs } from "@/lib/newsletters";
import Link from 'next/link';

export default function Newsletter() {
  const newsletters = getAllNewslettersSlugs();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div>
          <ul>
            {newsletters.map((newsletter: any) => {
              console.log('newsletter', newsletter)
              return (
              <li key={newsletter.params.id}>
                <Link 
                  href={`/newsletter/${newsletter.params.id}`}
                  className='font-mono hover:font-bold hover:underline'
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