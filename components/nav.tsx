"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const openCloseNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <nav className='sticky top-0 my-0 z-40 text-ma mx-auto font-bold flex w-full items-center justify-between px-4 py-8 bg-my-beige'>
      <div className="flex items-center">
        <Link className='hover:text-my-orange' href='/'>
          ✨ Strona główna
        </Link>
        <Link className=' hover:text-my-orange' href='/podcast'>
          🎙️ Podcast
        </Link>
        <Link className=' hover:text-my-orange' href='/newsletter'>
          💌 Newsletter
        </Link>
      </div>
      <div className="flex items-center">
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
        <div className="ml-4">
          {navbarOpen ? (
            <AiOutlineClose
              className="text-my-orange cursor-pointer"
              onClick={openCloseNavbar}
            />
          ) : (
            <AiOutlineMenu
              className="text-my-orange cursor-pointer"
              onClick={openCloseNavbar}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
