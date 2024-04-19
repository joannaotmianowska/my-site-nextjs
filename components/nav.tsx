import pick from 'lodash/pick';
import {NextIntlClientProvider, useMessages} from 'next-intl';
import NavContent from './navContent';
 
export default function Nav() {
  const messages = useMessages();
 
  return (
    <NextIntlClientProvider
      messages={
        pick(messages, 'Nav')
      }
    >
      <NavContent />
    </NextIntlClientProvider>
  );
}