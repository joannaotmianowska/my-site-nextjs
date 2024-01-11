import { getAllNewslettersSlugs, getNewslettersData } from "@/lib/newsletters";

export default function Newsletter(params: any) {
  console.log('params inside sinlge', params);
  return <div>this is a single newsletter<span></span></div>;
}

export async function generateStaticParams({ params }: { params: any }) {
  const data = getNewslettersData(params.id);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllNewslettersSlugs();
  return {
    paths,
    fallback: false,
  };
}
