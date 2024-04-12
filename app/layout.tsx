import type { Metadata } from 'next';
import './global.css';
import localFont from 'next/font/local';
import Nav from '../components/nav';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'Joanna Otmianowska',
  description: 'Moje portfolio',
};

const epi = localFont({
  src: '../public/fonts/Epilogue-Light.ttf',
  display: 'swap',
  variable: '--font-epi',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='w-fit h-fit'>
      <body className='w-full flex justify-center items-center'>
        <main className='w-full lg:w-10/12 text-my-blue font-body flex flex-col items-center justify-between'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
