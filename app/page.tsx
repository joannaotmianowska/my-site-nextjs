import Image from 'next/image';
import Link from 'next/link';
import myPhoto from '../public/assets/my-photo-2.jpg';
import Tile from '@/components/tile';
import { tiles, TileMainPage } from '../lib/tilesDetails';

export default function Home() {
  return (
    <>
      <div className='z-10 px-10 lg:px-0 lg:py-10 flex flex-col lg:flex-row w-full'>
        <div className='grid place-content-center grow'>
          <h1 className='py-4 text-8xl font-title text-my-orange'>
            Joanna Otmianowska
          </h1>
          <h3 className='py-2 font-bold font-hand text-xl lg:text-2xl'>
            * kod * codzienność * praca programistki * dobrostan * macierzyństwo
            *
          </h3>
          <p className='py-4 text-xl'>
            Cześć! Witaj na mojej stronie - jestem Joanna. Programistka
            frontend, która pisze, robi kreatywne rzeczy i stara się łapać
            balans między życiem mamy i stoma nowymi pomysłami na minutę.
            Znajdziesz tu zbiór wszystkich moich projektów i inicjatyw. Rozgość
            się! 🧡
          </p>
          <ul className='py-4 text-xl leading-10'>
            <h3 className='py-4 text-my-orange font-title'>
              Parę słów o mnie...
            </h3>
            <li>💭 Szukam pretekstów do rozmyślań i rozmów </li>
            <li>🎙️ Tworzę podcast i newsletter 💌</li>
            <li>🌱 Propaguję rozwój w swoim tempie</li>
            <li>📚 Wierzę w lifelong learning i pracę głęboką</li>
            <li>✨ Pokazuję nowe technologie</li>
            <li>👩🏻‍💻 Wspieram kobiety w IT</li>
            <li>⚡ Zarażam energią do działania</li>
          </ul>
        </div>
        <div className='z-10 p-4 grid place-content-center'>
          <Image
            src={myPhoto}
            alt='Joanna Otmianowska'
            priority={true}
            className='rounded-2xl object-contain'
            placeholder='blur'
          />
        </div>
      </div>
      <div className='grid place-items-center w-full my-8 mx-8 px-10 lg:px-0 lg:py-10'>
        <h3 className='py-8 text-4xl text-my-orange font-title'>
          Moje inicjatywy
        </h3>
        <ul className='flex flex-col lg:flex-row gap-4 w-full'>
          {tiles.map((tile: TileMainPage) => (
            <li
              key={tile.id}
              className='group relative h-[300px] lg:h-[400px] lg:w-full overflow-hidden rounded-2xl lg:flex-1 lg:hover:grow-[1.4] cursor-pointer'
            >
              <Tile tile={tile} />
            </li>
          ))}
        </ul>
      </div>
      <div className='z-10 flex w-full max-w-5xl px-10 lg:px-0 lg:py-10'>
        <ul className='p-4 text-xl leading-10'>
          <h3 className='py-4'>A oprócz tego...</h3>
          <li>
            ✨ Po migawki z życia, nowe technologie i garść myśli &nbsp;
            <Link
              href='https://www.instagram.com/joanna.otmianowska/'
              className='underline'
            >
              wskakuj na moje konto na IG 👩🏻‍💻
            </Link>{' '}
          </li>
          <li>
            ✨ Zbiór moich przemyśleń na techniczne tematy &nbsp;
            <Link href='https://dev.to/joannaotmianowska' className='underline'>
              znajdziesz na dev.to 💭
            </Link>{' '}
          </li>
          <li>
            ✨ Jak masz ochotę się do mnie odezwać,&nbsp;
            <Link href='mailto:joanna@wakeupandcode.pl' className='underline'>
              najlepiej pisz na joanna@wakeupancode.pl 💌
            </Link>{' '}
          </li>
          {/* <li>⭐ Ebook "Zostać programist(k)ą i nie zwariować"</li> */}
          {/* <li>⭐ Kurs online z podstaw frontendu</li>
          <li>⭐ Kurs online o zmianie branży</li> */}
          {/* <li>⭐ Podcasty, w których wystąpiłam gościnnie</li>
          <li>⭐ Webinary, które prowadziłam</li>
          <li>⭐ Wystąpienia na konferencjach</li> */}
        </ul>
      </div>
    </>
  );
}

// TODO add SEO
