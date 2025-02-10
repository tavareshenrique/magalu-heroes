import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Magalu Heroes',
    template: '%s | Magalu Heroes',
  },
  description: 'Here you can find the best heroes from Marvel Universe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased bg-blue-200`}>
        <NextTopLoader height={5} color="#0272E4" />

        {children}
      </body>
    </html>
  );
}
