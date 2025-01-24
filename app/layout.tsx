import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Tolqyn production",
  description: "Оперативное медиа агентство",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

    <body
        className={`${montserrat.className} antialiased bg-[#F7F2EC]`} style={{ backgroundImage: "url('/cover.png')" }}
    >
      {children}
    </body>
    </html>
  );
}
