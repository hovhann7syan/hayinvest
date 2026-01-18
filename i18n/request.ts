// @ts-nocheck
import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
 
const locales = ['en', 'ru', 'hy'];
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
 
  if (!locale || !locales.includes(locale)) {
    locale = 'en';
  }
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});