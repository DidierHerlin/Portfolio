"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

// ── Traductions ────────────────────────────────────────────────────────────────

const data = {
  fr: {
    tabs: {
      experience: "Expérience",
      education: "Éducation",
      skills: "Compétences",
      about: "À propos",
    },
    about: {
      title: "Mon propos",
      describe:
        "Je suis un développeur web passionné, spécialisé dans la création de sites modernes et performants, avec pour objectif de transformer les idées en solutions numériques adaptées aux besoins des clients.",
      info: [
        { fieldName: "Nom",          fieldValue: "ANDRIATAHINA Didier Herlin" },
        { fieldName: "Téléphone",    fieldValue: "(+261) 33 84 879 63" },
        { fieldName: "Expérience",   fieldValue: "Junior" },
        { fieldName: "Nationalité",  fieldValue: "Malagasy" },
        { fieldName: "Freelance",    fieldValue: "Disponible" },
        { fieldName: "Langues",      fieldValue: "Français, Anglais" },
        { fieldName: "Email",        fieldValue: "didierherlin18@gmail.com" },
      ],
    },
    experience: {
      title: "Mes expériences",
      description:
        "Au cours de mon parcours en développement web, j'ai développé mes compétences en travaillant sur différents projets et en collaborant avec des équipes pour créer des solutions performantes et adaptées aux utilisateurs.",
      items: [
        { entreprise: "Projet d'étude (ENI)",   poste: "Développeur back-end",           date: "Novembre 2025" },
        { entreprise: "ONG Centre Vonjy",        poste: "Développeur back-end",           date: "Avril 2025 - Août 2025" },
        { entreprise: "ONG ASOS Zone Sud",       poste: "Stagiaire en Développement web", date: "Août 2024 - Novembre 2024" },
        { entreprise: "Projet d'étude (2024)",   poste: "Stagiaire en Développement web", date: "Avril 2024" },
        { entreprise: "DRSP Antsimo-Andrefana", poste: "Stagiaire en Développement web", date: "Août 2023 - Novembre 2023" },
      ],
    },
    education: {
      title: "Parcours Académique",
      description:
        "Mon parcours académique témoigne de mon engagement et de ma passion pour l'informatique. Formé à l'École Nationale d'Informatique, j'ai acquis de solides compétences en programmation, conception de systèmes et gestion de projets.",
      items: [
        { ecole: "École Nationale d'Informatique",    niveau: "Master niveau 2 (M2)",           date: "En cours" },
        { ecole: "École Nationale d'Informatique",    niveau: "Master niveau 1 (M1)",           date: "2024-2025" },
        { ecole: "École Nationale d'Informatique",    niveau: "Licence (L3)",                   date: "2023-2024" },
        { ecole: "École Nationale d'Informatique",    niveau: "Deuxième année de Licence (L2)", date: "2022-2023" },
        { ecole: "École Nationale d'Informatique",    niveau: "Première année de Licence (L1)", date: "2021-2022" },
        { ecole: "Institution Nicolas Barré Tulear",  niveau: "Baccalauréat série D",           date: "2020" },
      ],
    },
    skills: {
      title: "Compétences",
      description:
        "En tant que développeur web, j'ai travaillé sur plusieurs projets qui m'ont permis de renforcer mes compétences et de mieux comprendre les besoins des clients, tout en collaborant avec des équipes pour créer des sites performants.",
    },
  },

  en: {
    tabs: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      about: "About me",
    },
    about: {
      title: "About me",
      describe:
        "I am a passionate web developer specialised in building modern, high-performance websites, with the goal of turning ideas into digital solutions tailored to clients' needs.",
      info: [
        { fieldName: "Name",         fieldValue: "ANDRIATAHINA Didier Herlin" },
        { fieldName: "Phone",        fieldValue: "(+261) 33 84 879 63" },
        { fieldName: "Experience",   fieldValue: "Junior" },
        { fieldName: "Nationality",  fieldValue: "Malagasy" },
        { fieldName: "Freelance",    fieldValue: "Available" },
        { fieldName: "Languages",    fieldValue: "French, English" },
        { fieldName: "Email",        fieldValue: "didierherlin18@gmail.com" },
      ],
    },
    experience: {
      title: "My experience",
      description:
        "Throughout my web development journey, I have honed my skills by working on various projects and collaborating with teams to build efficient, user-centred solutions.",
      items: [
        { entreprise: "Study project (ENI)",      poste: "Back-end developer",           date: "November 2025" },
        { entreprise: "NGO Centre Vonjy",          poste: "Back-end developer",           date: "April 2025 – August 2025" },
        { entreprise: "NGO ASOS Zone Sud",         poste: "Web Development Intern",       date: "August 2024 – November 2024" },
        { entreprise: "Study project (2024)",      poste: "Web Development Intern",       date: "April 2024" },
        { entreprise: "DRSP Antsimo-Andrefana",   poste: "Web Development Intern",       date: "August 2023 – November 2023" },
      ],
    },
    education: {
      title: "Academic Background",
      description:
        "My academic journey reflects my commitment and passion for computer science. Trained at the National School of Computer Science, I have gained solid skills in programming, system design and project management.",
      items: [
        { ecole: "National School of Computer Science", niveau: "Master's degree – Year 2 (M2)",  date: "Ongoing" },
        { ecole: "National School of Computer Science", niveau: "Master's degree – Year 1 (M1)",  date: "2024-2025" },
        { ecole: "National School of Computer Science", niveau: "Bachelor's degree (L3)",          date: "2023-2024" },
        { ecole: "National School of Computer Science", niveau: "Second year of Bachelor (L2)",    date: "2022-2023" },
        { ecole: "National School of Computer Science", niveau: "First year of Bachelor (L1)",     date: "2021-2022" },
        { ecole: "Institution Nicolas Barré Tulear",    niveau: "High school diploma – Series D",  date: "2020" },
      ],
    },
    skills: {
      title: "Skills",
      description:
        "As a web developer, I have worked on several projects that allowed me to sharpen my skills and better understand client needs, while collaborating with teams to build high-performance websites.",
    },
  },
};

// ── Données invariantes (icônes) ───────────────────────────────────────────────

const skillList = [
  { icon: <FaHtml5 />,       name: "HTML5" },
  { icon: <FaCss3 />,        name: "CSS3" },
  { icon: <FaJs />,          name: "JavaScript" },
  { icon: <FaReact />,       name: "React.js" },
  { icon: <SiNextdotjs />,   name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaNodeJs />,      name: "Node.js" },
  { icon: <FaPython />,      name: "Python" },
];

// ── Composants réutilisables ───────────────────────────────────────────────────

const SectionHeader = ({ title, description }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
  </div>
);

const CardDot = () => (
  <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
);

// ── Page ───────────────────────────────────────────────────────────────────────

const Resume = () => {
  const { lang } = useLanguage();
  const tr = data[lang];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-transparent">
            <TabsTrigger value="experience">{tr.tabs.experience}</TabsTrigger>
            <TabsTrigger value="education">{tr.tabs.education}</TabsTrigger>
            <TabsTrigger value="skills">{tr.tabs.skills}</TabsTrigger>
            <TabsTrigger value="about">{tr.tabs.about}</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            {/* ── Expérience ── */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <SectionHeader title={tr.experience.title} description={tr.experience.description} />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4">
                    {tr.experience.items.map((item) => (
                      <li
                        key={`${item.entreprise}-${item.date}`}
                        className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between"
                      >
                        <div className="flex flex-col gap-3">
                          <span className="text-accent font-medium text-center lg:text-left">
                            {item.date}
                          </span>
                          <h3 className="text-xl font-semibold text-center lg:text-left min-h-[60px] flex items-center justify-center lg:justify-start">
                            {item.poste}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                          <CardDot />
                          <p className="text-white/60 text-sm lg:text-base truncate">
                            {item.entreprise}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ── Éducation ── */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <SectionHeader title={tr.education.title} description={tr.education.description} />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] pr-4">
                    {tr.education.items.map((item) => (
                      <li
                        key={`${item.niveau}-${item.date}`}
                        className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-between"
                      >
                        <div className="flex flex-col gap-3">
                          <span className="text-accent font-medium text-center lg:text-left truncate">
                            {item.ecole}
                          </span>
                          <h3 className="text-xl font-semibold text-center lg:text-left min-h-[60px] flex items-center justify-center lg:justify-start">
                            {item.niveau}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3 mt-4">
                          <CardDot />
                          <p className="text-white/60 text-sm lg:text-base">{item.date}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ── Compétences ── */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <SectionHeader title={tr.skills.title} description={tr.skills.description} />
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skillList.map((skill) => (
                    <li key={skill.name} className="aspect-square">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-full bg-[#232329] rounded-xl flex justify-center items-center group cursor-pointer">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-accent text-white px-3 py-1 rounded-md">
                            <p className="font-medium">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* ── À propos ── */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <SectionHeader title={tr.about.title} description={tr.about.describe} />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 pr-4">
                    {tr.about.info.map((item) => (
                      <li key={item.fieldName} className="flex items-start gap-4">
                        <span className="text-white/60 min-w-[100px] xl:min-w-[120px] text-right xl:text-left pt-1">
                          {item.fieldName}
                        </span>
                        <span className="text-xl text-white/90 break-words flex-1 text-left">
                          {item.fieldValue}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;