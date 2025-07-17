'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Nav() {
  const t = useTranslations('Nav');
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openCloseNavbar = () => {
    setNavbarOpen(navbarOpen ? false : true);
  };

  return (
    <nav className='w-full lg:w-3/4 z-40 sticky top-0 my-0 flex justify-between bg-my-orange lg:bg-my-beige py-0 lg:text-base font-body'>
      {/* home page link removed for now */}
      {/* <Link
        href='/'
        className='lg:mx-2 lg:my-2 flex max-h-10 flex-none cursor-pointer items-center justify-center px-8 py-12'
      >
        <span className='lg:hover:animate-wiggle text-6xl'>🏠</span>
      </Link> */}
      <div className='items-right flex justify-between bg-my-orange lg:bg-my-beige'>
        <span
          className='z-40 flex cursor-pointer justify-between text-6xl p-8 text-white lg:hidden'
          onClick={openCloseNavbar}
          data-cy='nav-icon'
        >
          {navbarOpen ? `❌` : `🍔`}
        </span>
        <ul
          className={
            'rounded-2xl w-full absolute left-0 z-[-1] flex flex-col bg-my-orange lg:bg-my-beige pt-32 opacity-0 transition-all duration-500 ease-in lg:static lg:z-auto lg:w-auto lg:flex-row lg:items-center lg:justify-end lg:py-0 lg:pl-0 lg:text-right lg:opacity-100' +
            (navbarOpen ? ' opacity-100' : ' opacity-0')
          }
          onMouseLeave={() => setNavbarOpen(false)}
        >
          <Link
            className='cursor-pointer p-8 lg:pl-4 lg:pr-0 duration-500 lg:my-0 lg:hover:text-white lg:hover:animate-wiggle'
            href='https://joannaotmianowska.substack.com/'
            target='_blank'
          >
            💌&nbsp;&nbsp;&nbsp;{t('newsletter')}
          </Link>
          <Link
            className='cursor-pointer p-8 lg:pl-4 lg:pr-0 duration-500 lg:my-0 lg:hover:text-white lg:hover:animate-wiggle'
            href='https://open.spotify.com/show/2clasOw1kmW2Ru0VHwtSyA?si=f4ff0c2d08274e32'
            target='_blank'
          >
            🎙️&nbsp;&nbsp;&nbsp;{t('podcast')}
          </Link>
          <Link
            className='cursor-pointer p-8 lg:pl-4 lg:pr-0 duration-500 lg:my-0 lg:hover:text-white lg:hover:animate-wiggle'
            href='https://www.instagram.com/joanna.otmianowska/'
            target='_blank'
          >
            📸&nbsp;&nbsp;&nbsp;{t('instagram')}
          </Link>
          <Link
            className='cursor-pointer p-8 lg:pl-4 lg:pr-0 duration-500 lg:my-0 lg:hover:text-white lg:hover:animate-wiggle'
            href='https://www.wakeupandcode.pl'
            target='_blank'
          >
            🌱&nbsp;&nbsp;&nbsp;{t('blog')}
          </Link>
          <Link
            className='cursor-pointer p-8 lg:pl-4 lg:pr-0 duration-500 lg:my-0 lg:hover:text-white hover:animate-wiggle'
            href='https://www.facebook.com/groups/programujdziewczyno'
            target='_blank'
          >
            👩🏻‍💻&nbsp;&nbsp;&nbsp;{t('group')}
          </Link>
        </ul>
      </div>
      <div className='flex flex-row'>
        <Link
          href='/pl'
          locale='pl'
          className='cursor-pointer py-8 px-4 text-6xl lg:text-3xl lg:hover:animate-wiggle'
        >
          🇵🇱
        </Link>
        <Link
          href='/en'
          locale='en'
          className='cursor-pointer py-8 pl-4 pr-8 text-6xl lg:text-3xl lg:hover:animate-wiggle'
        >
          🇬🇧
        </Link>
      </div>
    </nav>
  );
}
