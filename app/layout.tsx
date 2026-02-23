import type { Metadata } from "next";
import { IBM_Plex_Mono, Rethink_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Danielle Kim — Product Designer",
  description:
    "Portfolio of Danielle Kim, product designer passionate about exploring the intersection of technology, design, and human experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${rethinkSans.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}