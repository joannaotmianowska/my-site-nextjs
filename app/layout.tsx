import type { Metadata } from 'next';
import type { Viewport } from 'next'
import './global.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

export const metadata: Metadata = {
  title: 'Joanna Otmianowska',
  description: 'Moje portfolio',
};
 
export const viewport: Viewport = {
  themeColor: '#ECA7A4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='w-fit h-fit overflow-x-hidden'>
      <body className='w-full flex justify-center items-center text-3xl leading-relaxed'>
        <main className='w-full lg:w-11/12 text-my-blue font-body flex flex-col items-center justify-between'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
