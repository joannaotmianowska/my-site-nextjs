import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Joanna Otmianowska',
  description: 'Moje portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='grid place-content-center'>
        <main className='text-my-blue flex min-h-screen max-w-6xl flex-col items-center justify-between'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
