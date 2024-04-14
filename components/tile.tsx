import Link from 'next/link';
import Image from 'next/image';
import { TileMainPage } from '@/lib/tilesDetails';

export default async function Tile({ tile }: { tile: TileMainPage }) {
  const img = await import(`../public/assets/${tile.image}`);
  return (
    <Link href={tile.link}>
      <Image
        src={img}
        alt={tile.title}
        priority={false}
        className='absolute inset-0 w-full h-full object-cover'
        placeholder='blur'
      />
      <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-my-blue/90 from-70% pt-20 pb-10 px-4 lg:p-4'>
        <div className='w-full lg:w-65'>
          <h2 className='text-4xl lg:text-2xl text-white font-title'>
            {tile.title}
          </h2>
          <div className='grid lg:grid-rows-[0fr] lg:transition-all  lg:group-hover:grid-rows-[1fr]'>
            <p className='mt-2 overflow-hidden text-white/90 lg:opacity-0 lg:transition lg:duration-1000 lg:group-hover:opacity-100 text-xl xl:text-base'>
              {tile.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
