/* Components */
import { Providers } from "@/lib/providers";
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next'

/* Instruments */
import styles from "../styles/layout.module.css";
import "../styles/globals.css";

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Steradian Book',
  description: 'All the best books available for you'
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className={montserrat.className}>
          
        </body>
      </html>
    </Providers>
  );
}
