
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageProgressBar from "@/components/PageProgressBar";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NodeMonks",
};

export default function RootLayout({ children }) {

  return (

    <html lang="en" className="scroll-smooth antialiased">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <PageProgressBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
