import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import myPhoto from '../../public/assets/my-photo-2.jpg';
import Tile from '@/components/tile';
import { tiles, TileMainPage } from '../../lib/tilesDetails';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <div className='z-10 px-10 lg:px-0 flex flex-col lg:flex-row xl:w-3/4'>
        <div className='grid place-content-center grow'>
          <h1 className='py-4 text-8xl font-title text-my-orange'>
            Joanna Otmianowska
          </h1>
          <h3 className='py-2 font-bold font-hand'>
            * {t('keywords.part_1')} * {t('keywords.part_2')} *{' '}
            {t('keywords.part_3')} * {t('keywords.part_4')} *<br></br>*{' '}
            {t('keywords.part_5')} *{t('keywords.part_6')} *{' '}
            {t('keywords.part_7')} *<br></br>
          </h3>
          <p className='py-4'>{t('intro')}</p>
          <ul className='py-4'>
            <h3 className='py-4 text-my-orange font-title'>
              {t('aboutMe.title')}
            </h3>
            <li>{t('aboutMe.part_1')}</li>
            <li>{t('aboutMe.part_2')}</li>
            <li>{t('aboutMe.part_3')}</li>
            <li>{t('aboutMe.part_4')}</li>
            <li>{t('aboutMe.part_5')}</li>
            <li>{t('aboutMe.part_6')}</li>
            <li>{t('aboutMe.part_7')}</li>
            <li>{t('aboutMe.part_8')}</li>
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
      <div className='grid place-items-center py-10 lg:px-0 w-full xl:w-3/4'>
        <h3 className='pb-8 text-6xl lg:text-4xl text-my-orange font-title'>
          {t('tiles.title')}
        </h3>
        <ul className='flex flex-col lg:flex-row gap-4 w-full'>
          {tiles.map((tile: TileMainPage) => (
            <li
              key={tile.id}
              className='group relative h-[450px] lg:h-[400px] lg:w-full overflow-hidden rounded-2xl lg:flex-1 lg:hover:grow-[1.4] cursor-pointer'
            >
              <Tile tile={tile} />
            </li>
          ))}
        </ul>
      </div>
      <div className='z-10 flex flex-col max-w-5xl px-10 py-5 lg:px-0 lg:py-10'>
        <h3 className='py-4 text-6xl lg:text-4xl'>{t('other.title')}</h3>
        <ul className='p-4 leading-10 text-2xl'>
          <li>
            ✨ {t('other.ig.part_1')}
            <Link
              href='https://www.instagram.com/joanna.otmianowska/'
              className='underline'
            >
              {t('other.ig.link')}
            </Link>{' '}
          </li>
          <li>
            ✨ {t('other.devto.part_1')}
            <Link href='https://dev.to/joannaotmianowska' className='underline'>
              {t('other.devto.link')}
            </Link>{' '}
          </li>
          <li>
            ✨ {t('other.mail.part_1')}
            <Link href='mailto:joanna@wakeupandcode.pl' className='underline'>
              {t('other.mail.link')}
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
