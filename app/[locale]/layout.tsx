import type { Metadata } from 'next';
import type { Viewport } from 'next';
import Link from 'next/link';
import React from 'react';
import '../global.css';
import Nav from '@/components/nav';
import Footer from '@/components/footerContent';

interface RootLayoutProps {
  children: React.ReactNode;
  locale: never;
}

export const metadata: Metadata = {
  title: '👩🏻‍💻 Joanna Otmianowska Portfolio',
  description: 'Moje portfolio',
};

export const viewport: Viewport = {
  themeColor: '#ECA7A4',
  width: 'device-width',
  initialScale: 0.5,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children, locale }: RootLayoutProps) {
  return (
    <html lang={locale} className='w-fit h-fit overflow-x-hidden'>
      <body className='w-full flex justify-center items-center text-4xl lg:text-xl  leading-relaxed bg-my-beige'>
        <main className='w-full text-my-blue font-body flex flex-col items-center justify-between bg-my-beige'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
