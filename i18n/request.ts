import {getRequestConfig} from 'next-intl/server';

// Указываем список поддерживаемых языков
const locales = ['en', 'ru', 'hy'];

export default getRequestConfig(async ({requestLocale}) => {
  // 1. Получаем текущую локаль от Next.js
  let locale = await requestLocale;

  // 2. Если локаль не пришла или она неизвестна — ставим 'en' принудительно
  if (!locale || !locales.includes(locale as any)) {
    locale = 'en';
  }

  // 3. БЕЗОПАСНАЯ ЗАГРУЗКА
  // Мы используем try-catch. Если файл не найдется, сайт не упадет!
  try {
    return {
      locale, // Явно возвращаем локаль (это важно для Vercel)
      messages: (await import(`../messages/${locale}.json`)).default
    };
  } catch (error) {
    // 4. ПЛАН Б: Если что-то пошло не так — грузим английский
    console.error(`❌ Error loading messages for locale "${locale}":`, error);
    return {
      locale: 'en',
      messages: (await import(`../messages/en.json`)).default
    };
  }
});