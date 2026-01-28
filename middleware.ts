import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
  // Список всех языков
  locales,

  // 👇 ГЛАВНОЕ ИЗМЕНЕНИЕ: Ставим 'hy' как дефолт
  defaultLocale: 'hy',

  // Используем настройки префиксов из navigation.ts
  localePrefix
});

export const config = {
  // Не трогать системные файлы, обрабатывать всё остальное
  matcher: ['/((?!api|_next|.*\\..*).*)']
};