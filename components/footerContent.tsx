import { useTranslations } from 'next-intl';

export default function FooterContent() {
  const t = useTranslations('Footer');
  return (
    <footer className='flex flex-col items-center justify-between py-10'>
      <div className='z-10 w-full max-w-5xl items-center justify-between  text-sm lg:flex'>
        {t('main')}
      </div>
    </footer>
  );
}
