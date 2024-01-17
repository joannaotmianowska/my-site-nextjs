import { getAllNewslettersSlugs, getNewslettersData } from "@/lib/newsletters";

export default async function Newsletter({ params }: any) {
  const data = await getNewslettersData(params.id);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <div>
          <h1 className='text-4xl font-bold font-mono text-center'>{data.title}</h1>
          <h2 className='text-1xl font-mono text-center'>Oryginalna data wysyłki: {data.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
      </div>
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
