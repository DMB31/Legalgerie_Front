import "./globals.css";
import { Montserrat, Lato } from 'next/font/google';
import Header from "@/components/Header";
import Footer from "@/components/Footer"

export const metadata = {
  title: "My Website",
  description: "This is my homepage built with Next.js",
};


const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: "variable",
  display: 'swap', 
  variable: '--font-montserrat', 
});

const lato = Lato({
  weight: [ '400', '700'], 
  subsets: ['latin'], 
  display: 'swap', 
  variable: '--font-montserrat', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${montserrat.variable} ${lato.variable}`}>
        <Header/>
       
        {children}
        
        <Footer/>
        </body>
    </html>
  );
}
