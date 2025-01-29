import type { Metadata } from "next";
import "./globals.css";
import { Urbanist } from 'next/font/google';
import DynamicCursor from "./components/DynamicCursor";
const urbanist = Urbanist({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: "Ayush Patwal",
  description: "Ayush patwal portfolio,",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      <DynamicCursor />
        {children}
      </body>
    </html>
  );
}
