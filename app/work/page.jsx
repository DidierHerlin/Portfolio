"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Image from "next/image";
import Link from "next/link";
import { WorkSliderBtns } from "../../components/ui/WorkSliderBtns";
import { useLanguage } from "../../context/LanguageContext";

// ── Traductions ────────────────────────────────────────────────────────────────

const t = {
  fr: {
    projectLabel: "Projet",
    liveLabel: "Live Projet",
    githubLabel: "Dépôt GitHub",
    imageAlt: (title) => `Aperçu du projet : ${title}`,
  },
  en: {
    projectLabel: "Project",
    liveLabel: "Live Project",
    githubLabel: "GitHub Repository",
    imageAlt: (title) => `Project preview: ${title}`,
  },
};

// ── Données ────────────────────────────────────────────────────────────────────

const projects = [
  {
    num: "01",
    category: {
      fr: "Application Web",
      en: "Web Application",
    },
    title: {
      fr: "Intégration et développement d'API REST",
      en: "REST API Integration & Development",
    },
    description: {
      fr: (
        <>
          Développement d&apos;une application web dédiée à la gestion des documents administratifs
          pour l&apos;ENI, en collaboration avec{" "}
          <a
            href="mailto:rejelafleuria@gmail.com"
            className="text-accent underline hover:opacity-80 transition-opacity"
          >
            rejelafleuria@gmail.com
          </a>
        </>
      ),
      en: (
        <>
          Development of a web application dedicated to managing administrative documents
          for the ENI, in collaboration with{" "}
          <a
            href="mailto:rejelafleuria@gmail.com"
            className="text-accent underline hover:opacity-80 transition-opacity"
          >
            rejelafleuria@gmail.com
          </a>
        </>
      ),
    },
    stack: ["Next.js", "Python", "Django", "PostgreSQL"],
    image: "/assets/work/projetFinEtude.png",
    live: "https://github.com/DidierHerlin/Projet_fin_d_ann-e_Django_2025",
    github: "https://github.com/DidierHerlin/Projet_fin_d_ann-e_Django_2025",
  },
  {
    num: "02",
    category: {
      fr: "Backend",
      en: "Backend",
    },
    title: {
      fr: "Application Programming Interface (API)",
      en: "Application Programming Interface (API)",
    },
    description: {
      fr: "En tant que responsable du déploiement, j'ai participé au développement et à la mise en production d'une API RESTful pour une application cartographique du centre Vonjy (Toliara), destinée au district d'Ampanihy, en utilisant Django et MySQL afin d'assurer performance, fiabilité et intégration efficace avec les applications front-end.",
      en: "As deployment lead, I participated in developing and releasing a RESTful API for a mapping application at the Vonjy Centre (Toliara), serving the Ampanihy district, using Django and MySQL to ensure performance, reliability and seamless integration with front-end applications.",
    },
    stack: ["Python", "Django", "MySQL"],
    image: "/assets/work/centreVonjy.png",
    live: "https://geoampanihy.com",
    github: "https://github.com/Vidy-Jean/Backend-projetVonjy",
  },
  {
    num: "03",
    category: {
      fr: "Full Stack",
      en: "Full Stack",
    },
    title: {
      fr: "Gestion des rapports de travail au sein d'ASOS Toliara",
      en: "Work Report Management at ASOS Toliara",
    },
    description: {
      fr: "Développement d'une application web dédiée à la gestion des rapports de travail au sein de l'ASOS Toliara.",
      en: "Development of a web application dedicated to managing work reports within ASOS Toliara.",
    },
    stack: ["React", "Tailwind CSS", "Python", "Django", "MySQL"],
    image: "/assets/work/asos.png",
    live: "https://github.com/DidierHerlin/backrd-asos-application",
    github: "https://github.com/DidierHerlin/backrd-asos-application",
  },
  {
    num: "04",
    category: {
      fr: "Application Desktop",
      en: "Desktop Application",
    },
    title: {
      fr: "Gestion des inscriptions",
      en: "Enrollment Management",
    },
    description: {
      fr: "Application de gestion des inscriptions pour l'ENI, développée en Python avec le framework Tkinter, intégrant un système d'audit des actions effectuées sur la base de données.",
      en: "An enrollment management application for the ENI, built with Python and Tkinter, featuring an audit system that tracks all actions performed on the database.",
    },
    stack: ["Python", "Tkinter", "MySQL"],
    image: "/assets/work/bda.png",
    live: "https://github.com/DidierHerlin/Projet_bda_M2",
    github: "https://github.com/DidierHerlin/Projet_bda_M2",
  },
];

// ── Composant réutilisable : bouton lien avec tooltip ─────────────────────────

const ProjectIconLink = ({ href, label, icon }) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <span className="text-white text-3xl group-hover:text-accent transition-all duration-300">
            {icon}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
);

// ── Page ───────────────────────────────────────────────────────────────────────

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const { lang } = useLanguage();
  const tr = t[lang];

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          {/* ── Infos projet ── */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">

              {/* Numéro */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Catégorie */}
              <h2 className="text-[42px] font-bold leading-none text-white capitalize">
                {tr.projectLabel} {project.category[lang]}
              </h2>

              {/* Description */}
              <p className="text-white/60">{project.description[lang]}</p>

              {/* Stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech, index) => (
                  <li key={tech} className="text-xl text-accent">
                    {tech}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* Séparateur */}
              <div className="border border-white/20" />

              {/* Liens */}
              <div className="flex items-center gap-4">
                {project.live && (
                  <ProjectIconLink
                    href={project.live}
                    label={tr.liveLabel}
                    icon={<BsArrowUpRight />}
                  />
                )}
                <ProjectIconLink
                  href={project.github}
                  label={tr.githubLabel}
                  icon={<BsGithub />}
                />
              </div>

            </div>
          </div>

          {/* ── Slider ── */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((p) => (
                <SwiperSlide key={p.num} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute inset-0 bg-black/10 z-10" />
                    <div className="relative w-full h-full">
                      <Image
                        src={p.image}
                        fill
                        className="object-cover"
                        alt={tr.imageAlt(p.title[lang])}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-primary text-xl"
              />
            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;