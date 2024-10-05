import localFont from "next/font/local";
import "./globals.css";
import Mynavbar from "@/components/Mynavbar";

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
  title: "Chatvibe",
  description: "create with next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-screen-xl mx-auto">
        <Mynavbar/>
        <div>{children}</div>
      </body>
    </html>
  );
}
