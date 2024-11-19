import { Lexend } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Background from "./components/Background";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Jihad's Portfolio",
  description:
    "Portfolio of Md Jihad Hossain | Web Developer | Graphic Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} min-h-screen
                   bg-[#030712]`}
      >
        <Background />
        

        <main className="flex flex-col relative">
          <div className="fixed w-full z-50">
            <Header />
          </div>

          <div className="container mx-auto flex px-1 md:px-5 pt-[75px] pb-[100px] md:pt-[85px] md:pb-0">
            <div className="w-20 lg:w-24 z-40 fixed h-screen flex items-center">
              <Navbar />
            </div>
            <div className="md:ml-28 w-full relative">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
