'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openCloseNavbar = () => {
    console.log('click');
    setNavbarOpen(navbarOpen ? false : true);
  };

  return (
    <nav className='z-40 w-full max-w-screen sticky top-0 my-0 flex items-stretch justify-between text-center bg-my-orange py-0 lg:bg-my-beige'>
      <Link
        href='/'
        className='mx-2 my-2 flex max-h-10 flex-none cursor-pointer items-center justify-center py-4 hover:text-my-orange'
      >
        <span className='lg:hover:animate-wiggle'>✨ strona główna</span>
      </Link>
      <div className='items-right flex justify-between bg-my-orange lg:bg-my-beige border-rose-600'>
        <span
          className='z-40 mx-4 my-4 flex cursor-pointer justify-between text-3xl text-white lg:hidden'
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
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange lg:hover:animate-wiggle'
            href='https://www.subscribepage.com/pretekst'
            target='_blank'
          >
            💌 newsletter
          </Link>
          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange lg:hover:animate-wiggle'
            href='https://open.spotify.com/show/2clasOw1kmW2Ru0VHwtSyA?si=f4ff0c2d08274e32'
            target='_blank'
          >
            🎙️ podcast
          </Link>

          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange lg:hover:animate-wiggle'
            href='https://www.instagram.com/joanna.otmianowska/'
            target='_blank'
          >
            📸 instagram
          </Link>

          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange lg:hover:animate-wiggle'
            href='https://www.wakeupandcode.pl'
            target='_blank'
          >
            📚 blog wakeupandcode.pl
          </Link>

          <Link
            className='cursor-pointer p-4 duration-500 lg:my-0 hover:text-my-orange hover:animate-wiggle'
            href='https://www.facebook.com/groups/programujdziewczyno'
            target='_blank'
          >
            👩🏻‍💻 programuj, dziewczyno!
          </Link>
        </ul>
      </div>
    </nav>
  );
}
