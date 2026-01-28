// 👇 ИЗМЕНЕНИЕ: используем createNavigation вместо createSharedPathnamesNavigation
import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ru', 'hy'] as const;
export const localePrefix = 'always';

// 👇 ИЗМЕНЕНИЕ: тут тоже вызываем createNavigation
export const { Link, redirect, usePathname, useRouter } =
  createNavigation({ locales, localePrefix });