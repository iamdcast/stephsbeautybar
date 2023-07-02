import "./globals.css";
import { Bodoni_Moda, Barlow } from "next/font/google";

const bodoni_moda = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-barlow",
});

export const metadata = {
  title: "Steph's Beauty Bar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${bodoni_moda.variable} ${barlow.variable}`}>
      <body className='bg-primary text-secondary font-sans'>{children}</body>
    </html>
  );
}
