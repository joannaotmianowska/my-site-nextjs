import { getAllNewslettersSlugs, getNewslettersData } from "@/lib/newsletters";

export default function Newsletter({ newsletterData }: { newsletterData: any}) {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        newsletter
        
        <h1>{}</h1>
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const paths = getAllNewslettersSlugs();
  return {
    paths,
    fallback: false,
  };
}
