import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Список всех поддерживаемых языков
  locales: ['en', 'ru', 'hy'],
 
  // Язык по умолчанию, если ничего не подошло
  defaultLocale: 'en',

  // Опционально: всегда показывать префикс языка в URL (например, /en/about)
  localePrefix: 'always' 
});
 
export const config = {
  // Матчер: говорит Next.js, на каких путях запускать middleware
  // Игнорируем файлы (_next, изображения и т.д.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};