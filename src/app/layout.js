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
        <header className="max-w-screen-xl mx-auto">
          <Mynavbar />
        </header>
        <div className="max-w-screen-xl mx-auto">
          <Hero />
          <Services />
          <Projects/>
          <About />
          <Glance />
          <WhyChooseUs />
          <section className="mt-28">
            <h2 className="text-center text-4xl font-medium">
               Technology<span className="text-blue-400"> We Used</span>
            </h2>
            <menu className="flex items-center justify-center mt-6 mx-auto">
              <nav className="flex flex-wrap justify-center gap-4">
                <Link className="btn bg-blue-500 text-white text-xl" href="/">
                  Frontend
                </Link>
                <Link
                  className="btn bg-blue-500 text-white text-xl"
                  href="/backend">
                  Backend
                </Link>
                <Link
                  className="btn bg-blue-500 text-white text-xl"
                  href="/database">
                  DataBase
                </Link>
                <Link
                  className="btn bg-blue-500 text-white text-xl"
                  href="/cms">
                  CMS
                </Link>
                <Link
                  className="btn bg-blue-500 text-white text-xl"
                  href="/devops">
                  DevOps
                </Link>
              </nav>
            </menu>
            {children}
          </section>
          <GetInTouch />
        </div>
        <Footer />
      </body>
    </html>
  );
}
