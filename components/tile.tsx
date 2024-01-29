import Link from 'next/link';
import Image from 'next/image';
import testPhoto from '../public/assets/female-coder-emoji.png';

export default function Tile() {
  return (
    <Link href='/newsletter'>
      <Image
        // TODO add real photos
        src={testPhoto}
        alt='tbd'
        priority={true}
        className='absolute inset-0 w-full h-full object-cover'
      />
      <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 from-30% p-4'>
        <div className='w-48'>
          <h2 className='text-2xl font-medium text-white'>
            The card title is here.
          </h2>
          <div className='grid grid-rows-[0fr] transition-all  group-hover:grid-rows-[1fr]'>
            <p className='mt-2 overflow-hidden text-white/70 opacity-0 transition duration-300 group-hover:opacity-100'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              quia ipsa eius.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
