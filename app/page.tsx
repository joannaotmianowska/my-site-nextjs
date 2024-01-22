import Image from 'next/image';
import Link from 'next/link';
import myPhoto from '../public/assets/my-photo.jpeg';

export default function Home() {
  return (
    <>
      <div className='z-10 flex w-full max-w-5xl'>
        <div>
          <h1 className='p-4 text-2xl font-bold'>Joanna Otmianowska</h1>
          <h3 className='p-4 '>
            * kod * codzienność * praca w IT * dobrostan * macierzyństwo *
          </h3>
          <p className='p-4 text-xl font-bold'>
            Cześć! Witaj na mojej stronie - jestem Joanna. Programistka
            frontend, która pisze, robi kreatywne rzeczy i stara się łapać
            balans między życiem mamy i stoma nowymi pomysłami na minutę.
            Znajdziesz tu zbiór wszystkich moich projektów i inicjatyw. Rozgość
            się! 🧡
          </p>
          <ul className='p-4 text-xl leading-10'>
            <h3 className='py-4  font-bold'>Parę słów o mnie...</h3>
            <li>💭 Szukam pretekstów do rozmyślań i rozmów </li>
            <li>🎙️ Tworzę podcast i newsletter 💌</li>
            <li>🌱 Propaguję rozwój w swoim tempie</li>
            <li>📚 Wierzę w lifelong learning i pracę głęboką</li>
            <li>✨ Pokazuję nowe technologie</li>
            <li>👩🏻‍💻 Wspieram kobiety w IT</li>
            <li>⚡ Zarażam energią do działania</li>
          </ul>
        </div>
        <div className='z-10 w-full p-4'>
          <Image
            src={myPhoto}
            alt='Joanna Otmianowska'
            priority={true}
            className='rounded'
          />
        </div>
      </div>
      <div className='z-10 flex w-full max-w-5xl'>
        <ul className='p-4 text-xl leading-10'>
          <h3 className='py-4  font-bold'>Moje inicjatywy</h3>
          <li>
            ⭐ <Link href='https://www.subscribepage.com/pretekst'>Newsletter "Pretekst do rozmyślań"</Link> - co dwa tygodnie w Twojej
            skrzynce mailowej
          </li>
          <li>
            ⭐ <Link href='https://open.spotify.com/show/2clasOw1kmW2Ru0VHwtSyA?si=f4ff0c2d08274e32'>Podcast "Pod Pretekstem"</Link> - posłuchaj i porozmkninaj razem ze mną
            życiowe tematy
          </li>
          <li>
            ⭐ <Link href='https://www.instagram.com/joanna.otmianowska/'>Moje konto na IG</Link> - migawki z życia, nowe technologie i garść
            myśli
          </li>
          <li>
            ⭐ <Link href='https://www.wakeupandcode.pl/'>Blog wakeupandcode.pl</Link> - zbiór artykułów o zmianie branży, nauce
            kodowania i stawianiu pierwszych kroków w IT
          </li>
          <li>
            ⭐ <Link href='https://www.facebook.com/groups/programujdziewczyno'>Grupa <span className='italic'>Programuj, dziewczyno!</span></Link> -
            IT, kod i motywacja w dziewczyńskim gronie
          </li>
          <li>⭐ <Link href='https://dev.to/joannaotmianowska'>Techniczne artykuły na dev.to</Link> - zbiór moich przemyśleń na techniczne tematy</li>
          {/* <li>⭐ Ebook "Zostać programist(k)ą i nie zwariować"</li> */}
          {/* <li>⭐ Kurs online z podstaw frontendu</li>
          <li>⭐ Kurs online o zmianie branży</li> */}
          {/* <li>⭐ Podcasty, w których wystąpiłam gościnnie</li>
          <li>⭐ Webinary, które prowadziłam</li>
          <li>⭐ Wystąpienia na konferencjach</li> */}
        </ul>
      </div>
      <div className='z-10 flex w-full max-w-5xl'>
        <h4>Kontakt: <Link href='mailto:joanna@wakeupandcode.pl'>joanna@wakeupandcode.pl</Link></h4>
      </div>
    </>
  );
}

// TODO add SEO
// TODO parallax effect
