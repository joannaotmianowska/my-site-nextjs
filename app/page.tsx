import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='z-10 flex w-full max-w-5xl'>
        <div>
          <h1 className='p-4 text-2xl font-bold'>Joanna Otmianowska</h1>
          <h3 className='p-4 font-mono'>
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
            <h3 className='py-4 font-mono font-bold'>
              Parę słów o mnie...
            </h3>
            <li>💭 Szukam pretekstów do rozmyślań i rozmów </li>
            <li>🎙️ Tworzę podcast i newsletter 💌</li>
            <li>🌱 Propaguję rozwój w swoim tempie</li>
            <li>📚 Wierzę w lifelong learning</li>
            <li>✨ Pokazuję nowe technologie</li>
            <li>👩🏻‍💻 Wspieram kobiety w IT</li>
            <li>⚡ Zarażam energią do działania</li>
          </ul>
        </div>
        <div className='z-10 w-full p-4'>
          <Image
            src='https://github.com/joannaotmianowska/portfolio-nextjs/assets/20688756/30e82590-e70c-4388-a417-b8e1cff8ad3f'
            alt='Joanna Otmianowska'
            priority={true}
            width={300}
            height={200}
            className='rounded'
          />
        </div>
      </div>
      <div className='z-10 flex w-full max-w-5xl'>
        <ul className='p-4 text-xl leading-10'>
          {/* TODO: add links, polish copy */}
          <h3 className='py-4 font-mono font-bold'>Moje inicjatywy</h3>
          <li>
            ⭐ Newsletter "Pretekst do rozmyślań" - co dwa tygodnie w Twojej
            skrzynce mailowej
          </li>
          <li>
            ⭐ Podcast "Pod Pretekstem" - posłuchaj i porozmkninaj razem ze mną
            życiowe tematy
          </li>
          <li>
            ⭐ Moje konto na IG - migawki z życia, nowe technologie i garść
            myśli
          </li>
          <li>
            ⭐ Blog wakeupandcode.pl - zbiór artykułów o zmianie branży, nauce
            kodowania i stawianiu pierwszych kroków w IT
          </li>
          <li>
            ⭐ Grupa <span className='italic'>Programuj, dziewczyno!</span> -
            IT, kod i motywacja w dziewczyńskim gronie
          </li>
          <li>⭐ Ebook "Zostać programist(k)ą i nie zwariować"</li>
          <li>⭐ Techniczne artykuły na dev.to</li>
          <li>⭐ Kurs online z podstaw frontendu</li>
          <li>⭐ Kurs online o zmianie branży</li>
          <li>⭐ Podcasty, w których wystąpiłam gościnnie</li>
          <li>⭐ Webinary, które prowadziłam</li>
          <li>⭐ Wystąpienia na konferencjach</li>
        </ul>
      </div>
      <div className='z-10 flex w-full max-w-5xl'>
        <h4>Kontakt: joanna@wakeupandcode.pl</h4>
      </div>
    </>
  );
}
