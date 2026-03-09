"use client";
import CountUp from "react-countup";
import { useLanguage } from "../context/LanguageContext";

// ── Traductions ────────────────────────────────────────────────────────────────

const statsData = {
  fr: [
    { num: 3,  text: "Années d'expérience" },
    { num: 5,  text: "Projets réalisés" },
    { num: 8,  text: "Technologies maîtrisées" },
    { num: 30, text: "Commits poussés" },
  ],
  en: [
    { num: 3,  text: "Years of experience" },
    { num: 5,  text: "Projects completed" },
    { num: 8,  text: "Technologies mastered" },
    { num: 30, text: "Commits pushed" },
  ],
};

// ── Composant ─────────────────────────────────────────────────────────────────

const Stats = () => {
  const { lang } = useLanguage();
  const stats = statsData[lang];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;