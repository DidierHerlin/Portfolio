"use client";

import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import { useLanguage } from "../context/LanguageContext";

// ── Traductions ────────────────────────────────────────────────────────────────

const t = {
  fr: {
    role: "Développeur Web",
    greeting: "Bonjour, Je suis",
    bio: "Je suis étudiant en M2 à l'École Nationale d'Informatique de Fianarantsoa, spécialisé en développement web, passionné par les solutions numériques et motivé par de nouveaux défis pour progresser et contribuer à des projets innovants.",
    download: "Télécharger le CV",
  },
  en: {
    role: "Web Developer",
    greeting: "Hello, I am",
    bio: "I am a Master's student (M2) at the National School of Computer Science in Fianarantsoa, specialising in web development. I am passionate about digital solutions and eager to take on new challenges to grow and contribute to innovative projects.",
    download: "Download CV",
  },
};

// ── Page ───────────────────────────────────────────────────────────────────────

const Home = () => {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Texte */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{tr.role}</span>
            <h1 className="h1 mb-6">
              {tr.greeting} <br />
              <span className="text-accent">ANDRIATAHINA Didier Herlin</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">{tr.bio}</p>

            {/* Boutons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>{tr.download}</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;