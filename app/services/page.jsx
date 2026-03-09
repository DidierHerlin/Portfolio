"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

// ── Traductions ────────────────────────────────────────────────────────────────

const data = {
  fr: [
    {
      num: "01",
      title: "Développement Web",
      description:
        "Je conçois et développe des sites web performants, modernes et adaptés aux besoins de mes clients, du front-end au back-end.",
      href: "",
    },
    {
      num: "02",
      title: "Développement d'Application",
      description:
        "Je crée des applications web robustes et scalables en utilisant des technologies modernes comme React, Next.js et Node.js.",
      href: "",
    },
    {
      num: "03",
      title: "Formateur",
      description:
        "Andragogie avec l'UNGP Mionjo (District de Betioky-Sud) : accompagnement des agents communaux à la maîtrise des outils informatiques — Microsoft Word, PowerPoint, envoi d'e-mails et utilisation de WhatsApp.",
      href: "",
    },
    {
      num: "04",
      title: "Maintenance Système & Réseaux",
      description:
        "J'assure la maintenance, la surveillance et la sécurisation des systèmes informatiques et infrastructures réseaux pour garantir leur disponibilité.",
      href: "",
    },
  ],
  en: [
    {
      num: "01",
      title: "Web Development",
      description:
        "I design and develop high-performance, modern websites tailored to my clients' needs, from front-end to back-end.",
      href: "",
    },
    {
      num: "02",
      title: "Application Development",
      description:
        "I build robust, scalable web applications using modern technologies such as React, Next.js and Node.js.",
      href: "",
    },
    {
      num: "03",
      title: "Trainer",
      description:
        "Adult education with UNGP Mionjo (Betioky-Sud District): coaching municipal agents to master computer tools — Microsoft Word, PowerPoint, sending emails and using WhatsApp.",
      href: "",
    },
    {
      num: "04",
      title: "System & Network Maintenance",
      description:
        "I provide maintenance, monitoring and security for computer systems and network infrastructures to ensure their availability.",
      href: "",
    },
  ],
};

// ── Page ───────────────────────────────────────────────────────────────────────

const Services = () => {
  const { lang } = useLanguage();
  const services = data[lang];

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service) => (
            <div
              key={service.num}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* Numéro + lien */}
              <div className="w-full flex justify-between items-start">
                <span className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </span>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* Titre */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-white/60">{service.description}</p>

              {/* Séparateur */}
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;