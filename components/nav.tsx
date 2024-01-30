import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='text-ma mx-auto font-bold flex w-full items-center justify-between px-4 py-8'>
      <Link className='hover:text-my-orange' href='/'>
        ✨ Strona główna
      </Link>
      <Link className=' hover:text-my-orange' href='/podcast'>
        🎙️ Podcast
      </Link>
      <Link className=' hover:text-my-orange' href='/newsletter'>
        💌 Newsletter
      </Link>
      <Link
        className=' hover:text-my-orange'
        href='https://www.instagram.com/joanna.otmianowska/'
      >
        📸 Instagram
      </Link>
      <Link
        className=' hover:text-my-orange'
        href='https://www.wakeupandcode.pl'
      >
        📚 Blog
      </Link>
      {/* <Link className=' hover:underline hover:font-bold' href='https://www.wakeupandcode.pl/sklep/'>
            Sklep
        </Link> */}
    </nav>
  );
}
