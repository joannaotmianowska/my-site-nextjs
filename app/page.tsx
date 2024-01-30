import Image from 'next/image';
import Link from 'next/link';
import myPhoto from '../public/assets/my-photo-2.jpg';
import Tile from '@/components/tile';

export default function Home() {
  return (
    <>
      <div className='z-10 flex w-full'>
        <div className='grid place-content-center'>
          <h1 className='py-4 text-4xl font-bold text-my-orange'>
            Joanna Otmianowska
          </h1>
          <h3 className='py-2'>
            * kod * codzienność * praca w IT * dobrostan * macierzyństwo *
          </h3>
          <p className='py-4 text-xl font-bold'>
            Cześć! Witaj na mojej stronie - jestem Joanna. Programistka
            frontend, która pisze, robi kreatywne rzeczy i stara się łapać
            balans między życiem mamy i stoma nowymi pomysłami na minutę.
            Znajdziesz tu zbiór wszystkich moich projektów i inicjatyw. Rozgość
            się! 🧡
          </p>
          <ul className='py-4 text-xl leading-10'>
            <h3 className='py-4 text-my-orange font-bold'>
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
        <div className='z-10 p-4'>
          <Image
            src={myPhoto}
            alt='Joanna Otmianowska'
            priority={true}
            className='rounded-2xl'
          />
        </div>
      </div>
      <div className='grid place-items-center w-full my-8 mx-8'>
        <h3 className='py-8 text-4xl font-bold text-my-orange'>
          Moje inicjatywy
        </h3>
        <ul className='flex gap-4 w-full'>
          {[...Array(4).keys()].map((item) => (
            <li
              key={item}
              className='group relative h-[500px] w-full overflow-hidden rounded-2xl flex-1 hover:grow-[1.4] cursor-pointer'
            >
              <Tile />
            </li>
          ))}
        </ul>
      </div>
      <div className='z-10 flex w-full max-w-5xl'>
        <ul className='p-4 text-xl leading-10'>
          <h3 className='py-4  font-bold'>Moje inicjatywy</h3>
          <li>
            ⭐{' '}
            <Link href='https://www.subscribepage.com/pretekst'>
              Newsletter "Pretekst do rozmyślań"
            </Link>{' '}
            - co dwa tygodnie w Twojej skrzynce mailowej
          </li>
          <li>
            ⭐{' '}
            <Link href='https://open.spotify.com/show/2clasOw1kmW2Ru0VHwtSyA?si=f4ff0c2d08274e32'>
              Podcast "Pod Pretekstem"
            </Link>{' '}
            - posłuchaj i porozmkninaj razem ze mną życiowe tematy
          </li>
          <li>
            ⭐{' '}
            <Link href='https://www.instagram.com/joanna.otmianowska/'>
              Moje konto na IG
            </Link>{' '}
            - migawki z życia, nowe technologie i garść myśli
          </li>
          <li>
            ⭐{' '}
            <Link href='https://www.wakeupandcode.pl/'>
              Blog wakeupandcode.pl
            </Link>{' '}
            - zbiór artykułów o zmianie branży, nauce kodowania i stawianiu
            pierwszych kroków w IT
          </li>
          <li>
            ⭐{' '}
            <Link href='https://www.facebook.com/groups/programujdziewczyno'>
              Grupa <span className='italic'>Programuj, dziewczyno!</span>
            </Link>{' '}
            - IT, kod i motywacja w dziewczyńskim gronie
          </li>
          <li>
            ⭐{' '}
            <Link href='https://dev.to/joannaotmianowska'>
              Techniczne artykuły na dev.to
            </Link>{' '}
            - zbiór moich przemyśleń na techniczne tematy
          </li>
          {/* <li>⭐ Ebook "Zostać programist(k)ą i nie zwariować"</li> */}
          {/* <li>⭐ Kurs online z podstaw frontendu</li>
          <li>⭐ Kurs online o zmianie branży</li> */}
          {/* <li>⭐ Podcasty, w których wystąpiłam gościnnie</li>
          <li>⭐ Webinary, które prowadziłam</li>
          <li>⭐ Wystąpienia na konferencjach</li> */}
        </ul>
      </div>
      <div className='z-10 flex w-full max-w-5xl'>
        <h4 className='w-full text-center'>
          Kontakt:{' '}
          <Link href='mailto:joanna@wakeupandcode.pl'>
            joanna@wakeupandcode.pl
          </Link>
        </h4>
      </div>
    </>
  );
}

// TODO add SEO
// TODO remove links as list and add them as tiles
