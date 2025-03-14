import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from 'next/font/google'
import "./globals.css";
import Navbar from "../components/Navbar";
import Script from 'next/script';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DOB Protocol",
  description: "Decentralized Options for Bitcoin",
  metadataBase: new URL('https://dobprotocol.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased ${roboto.className}`}>
      <head>
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
      </head>
      <body>
        <Navbar />
        {children}
        {/* Script to handle ethereum-related errors */}
        <Script src="/js/disable-crypto-errors.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
