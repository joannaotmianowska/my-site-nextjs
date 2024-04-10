import type { Metadata } from 'next';
import './globals.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

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
        <main className='text-my-blue font-body flex min-h-screen max-w-6xl flex-col items-center justify-between'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
