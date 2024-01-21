import { getAllNewslettersSlugs, getNewslettersData } from '@/lib/newsletters';

export default async function Newsletter({ params }: any) {
  const data = await getNewslettersData(params.id);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='flex flex-row z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex'>
        <div>
          <h1 className='text-4xl font-bold  text-center'>{data.title}</h1>
          <h2 className='text-1xl  text-center'>
            Oryginalna data wysyłki: {data.date}
          </h2>
          <div
            className='text-lg font-sans space-y-8'
            dangerouslySetInnerHTML={{ __html: data.contentHtml }}
          />
        </div>
      </div>
      <div
        className='ml-form-embed'
        data-account='1266630:w2b1g4j9n7'
        data-form='5962655:x7z2u3'
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <!-- MailerLite Universal -->
            <script>
            (function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
            var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
            f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
            var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
            _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
            
            var ml_account = ml('accounts', '1266630', 'w2b1g4j9n7', 'load');
            </script>
            <!-- End MailerLite Universal -->
          `,
        }}
      />
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
