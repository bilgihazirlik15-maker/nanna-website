import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nanna — Contemporary Tufting Studio',
  description: 'İstanbul’da tasarlanan, elde tuft edilen özgün tekstil yüzeyleri.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
