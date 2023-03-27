import Image from "next/image";
import "@/styles/globals.css";
import Link from "next/link";
import type { AppProps } from "next/app";

const Header = () => {
  return (
    <header className="w-full bg-indigo-700 h-16 justify-center flex sticky top-0 z-50">
      <div className="w-full max-w-7xl flex items-center h-full px-2 justify-between">
        <Image
          src="/logo-placeholder.png"
          alt="logo"
          width={48}
          height={48}
          priority
        />
        <nav className="">
          <ul className="flex gap-4 md:gap-12 text-white font-semibold">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="w-16"></div>
      </div>
    </header>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
