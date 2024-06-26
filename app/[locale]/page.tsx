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
      <div className='fadeIn z-10 px-10 lg:px-0 flex flex-col lg:flex-row xl:w-3/4'>
        <div className='flex flex-col justify-center align-center md:pr-10'>
          <h1 className='py-4 text-8xl xl:text-9xl font-title text-my-orange'>
            Joanna Otmianowska
          </h1>
          <h3 className='pt-2 pb-8 font-bold text-2xl xl:text-xl'>
            * {t('keywords.part_1')} * {t('keywords.part_2')} *{' '}
            {t('keywords.part_3')} * {t('keywords.part_4')} *{' '}
            {t('keywords.part_5')} *{t('keywords.part_6')} *{' '}
            {t('keywords.part_7')} *<br></br>
          </h3>
          <p className='py-4 text-4xl xl:text-2xl'>{t('intro')}</p>
          <ul className='py-4 text-3xl xl:text-xl'>
            <h3 className='py-4 text-my-orange font-title xl:text-4xl'>
              {t('aboutMe.title')}
            </h3>
            <li>💭&nbsp;&nbsp;&nbsp;{t('aboutMe.part_1')}</li>
            <li>
              🎙️&nbsp;&nbsp;&nbsp;{t('aboutMe.part_2')}&nbsp;&nbsp;&nbsp;💌
            </li>
            <li>🌱&nbsp;&nbsp;&nbsp;{t('aboutMe.part_3')}</li>
            <li>📚&nbsp;&nbsp;&nbsp;{t('aboutMe.part_4')}</li>
            <li>✨&nbsp;&nbsp;&nbsp;{t('aboutMe.part_5')}</li>
            <li>👩🏻‍💻&nbsp;&nbsp;&nbsp;{t('aboutMe.part_6')}</li>
            <li>🚀&nbsp;&nbsp;&nbsp;{t('aboutMe.part_7')}</li>
          </ul>
          <ul className='py-4 text-3xl xl:text-xl'>
            <h3 className='py-4 text-my-orange font-title xl:text-4xl'>
              {t('aboutWork.title')}
            </h3>
            <li>💻&nbsp;&nbsp;&nbsp;{t('aboutWork.part_1')}</li>
            <li>🔧&nbsp;&nbsp;&nbsp;{t('aboutWork.part_2')}</li>
            <li>🎤&nbsp;&nbsp;&nbsp;{t('aboutWork.part_3')}</li>
            <li>🛠️&nbsp;&nbsp;&nbsp;{t('aboutWork.part_4')}</li>
            <li>🧪&nbsp;&nbsp;&nbsp;{t('aboutWork.part_5')}</li>
            <li>🤝&nbsp;&nbsp;&nbsp;{t('aboutWork.part_6')}</li>
          </ul>
          <div className='flex flex-col md:flex-row items-center justify-start gap-10 py-4'>
            <Link
              href='https://www.linkedin.com/in/joanna-otmianowska-73910585/'
              target='_blank'
            >
              <button className='py-4 px-8 text-3xl xl:text-xl bg-my-violet text-white rounded-2xl hover:text-my-blue hover:shadow-md'>
                {t('aboutWork.linkedin')}
              </button>
            </Link>
            <Link href='https://github.com/joannaotmianowska' target='_blank'>
              <button className='py-4 px-8 text-3xl xl:text-xl bg-my-violet text-white rounded-2xl hover:text-my-blue hover:shadow-md'>
                {t('aboutWork.github')}
              </button>
            </Link>
          </div>
        </div>
        <div className='z-10 p-4 flex items-center justify-center'>
          <Image
            src={myPhoto}
            alt='Joanna Otmianowska'
            priority={true}
            className='rounded-2xl object-contain'
            placeholder='blur'
          />
        </div>
      </div>
      <div className='grid place-items-center py-12 lg:px-0 w-full xl:w-3/4'>
        <h3 className='py-12 text-6xl text-my-orange font-title'>
          {t('tiles.title')}
        </h3>
        <ul className='flex flex-col lg:flex-row gap-4 w-full'>
          {tiles.map((tile: TileMainPage) => (
            <li
              key={tile.id}
              className='group relative h-[800px] lg:h-[400px] lg:w-full overflow-hidden rounded-2xl lg:flex-1 lg:hover:grow-[1.4] cursor-pointer'
            >
              <Tile tile={tile} />
            </li>
          ))}
        </ul>
      </div>
      <div className='z-10 flex flex-col max-w-5xl px-10 py-5 lg:px-0 lg:py-10'>
        <h3 className='py-4 text-4xl lg:text-2xl'>{t('other.title')}</h3>
        <ul className='p-4 leading-10 text-3xl xl:text-xl'>
          <li className='py-2'>
            ✨&nbsp;&nbsp;&nbsp;{t('other.ig.part_1')}
            <Link
              href='https://www.instagram.com/joanna.otmianowska/'
              className='underline'
            >
              {t('other.ig.link')}
            </Link>{' '}
          </li>
          <li className='py-2'>
            ✨&nbsp;&nbsp;&nbsp;{t('other.devto.part_1')}
            <Link href='https://dev.to/joannaotmianowska' className='underline'>
              {t('other.devto.link')}
            </Link>{' '}
          </li>
          <li className='py-2'>
            ✨&nbsp;&nbsp;&nbsp;{t('other.mail.part_1')}
            <Link href='mailto:joanna@wakeupandcode.pl' className='underline'>
              {t('other.mail.link')}
            </Link>{' '}
          </li>
        </ul>
      </div>
    </>
  );
}

// TODO add SEO
