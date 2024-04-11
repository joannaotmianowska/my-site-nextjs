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
    <html lang='en' className={epi.variable}>
      <body className='w-full h-full grid place-content-center'>
        <main className='text-my-blue font-body flex min-h-screen lg:max-w-6xl flex-col items-center justify-between'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
