import '../globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'mjw.sh',
  description: 'replaced by a shell script',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <nav className="fixed top-10 right-2">
          <ul className="text-right">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/recipes/">recipes</Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}
