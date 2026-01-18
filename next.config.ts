import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  typescript: {
    // Игнорируем ошибки типов при сборке
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

// 👇 ВОТ МАГИЯ: 'as any' убирает красную волнистую линию
export default withNextIntl(nextConfig as any);