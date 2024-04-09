'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { tiles } from '@/lib/tilesDetails';

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openCloseNavbar = () => setNavbarOpen(navbarOpen ? false : true);

  return (
    <nav className='z-40 w-full sticky top-0 my-0 flex items-stretch justify-between bg-my-orange py-0 font-semibold lg:bg-my-beige'>
      <Link
        href='/'
        className='mx-2 my-2 flex max-h-10 flex-none cursor-pointer items-center justify-center py-4 hover:text-my-orange'
      >
        <span>✨ strona główna</span>
      </Link>
      <div className='items-right flex justify-between bg-my-orange lg:bg-my-beige'>
        <span
          className='mx-4 my-4 flex cursor-pointer justify-between text-3xl text-white lg:hidden'
          onClick={openCloseNavbar}
          data-cy='nav-icon'
        >
          {navbarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </span>
        <ul
          className={
            'absolute left-0 z-[-1] flex w-full grow flex-col bg-my-orange pt-12 opacity-0 transition-all duration-500 ease-in lg:static lg:z-auto lg:w-auto lg:flex-row lg:items-center lg:justify-end lg:bg-my-beige lg:py-0 lg:pl-0 lg:text-right lg:opacity-100' +
            (navbarOpen ? ' opacity-100' : ' opacity-0')
          }
          onMouseLeave={() => setNavbarOpen(false)}
        >
          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange'
            href={tiles[0].link}
          >
            💌 newsletter
          </Link>
          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange'
            href={tiles[1].link}
          >
            🎙️ podcast
          </Link>

          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange'
            href='https://www.instagram.com/joanna.otmianowska/'
            target='_blank'
          >
            📸 instagram
          </Link>

          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange'
            href={tiles[2].link}
            target='_blank'
          >
            📚 blog wakeupandcode.pl
          </Link>

          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange'
            href={tiles[3].link}
            target='_blank'
          >
            👩🏻‍💻 programuj, dziewczyno!
          </Link>
        </ul>
      </div>
    </nav>
  );
}
