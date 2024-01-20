import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='text-ma mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-8'>
      <Link className=' hover:font-bold hover:underline' href='/'>
        ✨ Strona główna
      </Link>
      <Link
        className=' hover:font-bold hover:underline'
        href='/podcast'
      >
        🎙️ Podcast
      </Link>
      <Link
        className=' hover:font-bold hover:underline'
        href='/newsletter'
      >
        💌 Newsletter
      </Link>
      <Link
        className=' hover:font-bold hover:underline'
        href='https://www.instagram.com/joanna.otmianowska/'
      >
        📸 Instagram
      </Link>
      <Link
        className=' hover:font-bold hover:underline'
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
