import { getAllNewslettersSlugs, getNewslettersData } from "@/lib/newsletters";

export default function Newsletter({ data }: { data: any}) {
  return <div>this is a single newsletter<span>{data}</span></div>;
}

export async function generateStaticParams({ params }: { params: any }) {
  const data = getNewslettersData(params.id);
  return {
    props: {
      data,
    },
  };
}