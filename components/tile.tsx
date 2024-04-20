import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { TileMainPage } from '@/lib/tilesDetails';

export default async function Tile({ tile }: { tile: TileMainPage }) {
  const img = await import(`../public/assets/${tile.image}`);
  const t = await getTranslations('Home.tiles');

  return (
    <Link href={tile.link}>
      <Image
        src={JSON.parse(JSON.stringify(img))}
        alt={tile.translationKey}
        priority={false}
        className='absolute inset-0 w-full h-full object-cover'
        placeholder='blur'
      />
      <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-my-blue/90 from-70% pt-20 pb-10 px-4 lg:p-4'>
        <div className='w-full lg:w-65'>
          <h2 className='text-4xl lg:text-2xl text-white font-title'>
            {t(`${tile.translationKey}.title`)}
          </h2>
          <div className='grid lg:grid-rows-[0fr] lg:transition-all  lg:group-hover:grid-rows-[1fr]'>
            <p className='mt-2 overflow-hidden text-white/90 lg:opacity-0 lg:transition lg:duration-1000 lg:group-hover:opacity-100 text-xl xl:text-base'>
              {t(`${tile.translationKey}.description`)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
