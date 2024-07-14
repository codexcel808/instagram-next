import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import SessionWrapper from "./components/sessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram",
  description: "A clone of instagram built with the latest version of the next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}

      </body>
    </html>

    </SessionWrapper>
  );
}
