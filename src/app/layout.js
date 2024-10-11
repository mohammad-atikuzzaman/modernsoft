import localFont from "next/font/local";
import "./globals.css";
import Mynavbar from "@/components/Mynavbar";
import Footer from "@/components/Footer";

import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import Glance from "@/components/Glance";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import Projects from "@/components/Projects";

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

export const metadata = {
  title: "Modern Soft",
  description: "create with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="max-w-screen-xl mx-auto sticky top-0 z-50">
          <Mynavbar />
        </header>
        <main>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
