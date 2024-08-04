import { Inter } from 'next/font/google';
import KeyProvider from './providers/KeyProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'friend Lee',
  description: 'friend Lee | Создаем современные web-продукты',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <KeyProvider>
          <main>{children}</main>
        </KeyProvider>
      </body>
    </html>
  );
}
