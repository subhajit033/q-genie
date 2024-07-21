import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from '@/shared/utils/Provider';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BuzzLetter',
  description: 'You Go to newsletter platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: '#624cf5' },
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <Providers>{children}</Providers>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
