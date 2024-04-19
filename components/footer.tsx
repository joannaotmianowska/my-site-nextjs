import pick from 'lodash/pick';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import FooterContent from './footerContent';
 
export default function Nav() {
  const messages = useMessages();
 
  return (
    <NextIntlClientProvider
      messages={
        pick(messages, 'Nav')
      }
    >
      <FooterContent />
    </NextIntlClientProvider>
  );
}