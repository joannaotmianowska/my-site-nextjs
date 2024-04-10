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
      <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 from-50% p-4'>
        <div className='w-65'>
          <h2 className='text-2xl   text-white'>{tile.title}</h2>
          <div className='grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]'>
            <p className='mt-2 overflow-hidden text-white/90 opacity-0 transition duration-1000 group-hover:opacity-100'>
              {tile.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
