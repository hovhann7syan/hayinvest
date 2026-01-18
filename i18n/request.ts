import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
 
const locales = ['en', 'ru', 'hy'];
 
// @ts-ignore
export default getRequestConfig(async ({requestLocale}) => {
  // Получаем локаль. Если придет undefined, подставим 'en'
  let locale = await requestLocale;
 
  // Проверяем валидность
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en';
  }
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});