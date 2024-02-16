import "../styles/globals.css";
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next'
import Providers from "@/components/core/Providers";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

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
          <Header />
          <main>
            {props.children}
          </main>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
