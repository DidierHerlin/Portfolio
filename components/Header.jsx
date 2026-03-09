"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Herlin <span className="text-accent"> .</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* Toggle langue */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 border border-accent rounded-md px-3 py-1 text-sm font-semibold text-accent hover:bg-accent hover:text-white transition-all duration-300"
            aria-label="Changer de langue"
          >
            <span className={lang === "fr" ? "opacity-100" : "opacity-40"}>FR</span>
            <span className="text-white/30">/</span>
            <span className={lang === "en" ? "opacity-100" : "opacity-40"}>EN</span>
          </button>
          <Link href="/contact">
            <Button>{lang === "fr" ? "Engagez-moi" : "Hire me"}</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;