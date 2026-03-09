"use client";

import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

/* ─── Traductions ─────────────────────────────────────────────── */
const t = {
  fr: {
    heading: 'Travaillons ensemble',
    subheading:
      "Vous avez un projet en tête ? N'hésitez pas à me contacter. Je serai ravi de discuter de vos besoins et de trouver la meilleure solution pour vous.",
    firstName: 'Votre nom',
    lastName: 'Votre prénom(s)',
    email: 'Votre adresse mail',
    phone: 'Votre numéro de téléphone',
    serviceLabel: 'Choisir un service',
    services: {
      web: 'Développement Web',
      desktop: 'Application Desktop',
      mobile: 'Développement Mobile',
    },
    message: 'Votre message...',
    send: 'Envoyer le message',
    info: [
      { label: 'Téléphone' },
      { label: 'Email' },
      { label: 'Adresse' },
    ],
  },
  en: {
    heading: "Let's work together",
    subheading:
      "Have a project in mind? Feel free to reach out. I'd love to discuss your needs and find the best solution for you.",
    firstName: 'Your last name',
    lastName: 'Your first name(s)',
    email: 'Your email address',
    phone: 'Your phone number',
    serviceLabel: 'Select a service',
    services: {
      web: 'Web Development',
      desktop: 'Desktop Application',
      mobile: 'Mobile Development',
    },
    message: 'Your message...',
    send: 'Send message',
    info: [
      { label: 'Phone' },
      { label: 'Email' },
      { label: 'Address' },
    ],
  },
};

/* ─── Données de contact (icônes + valeurs invariantes) ─────────── */
const contactData = [
  { icon: <FaPhoneAlt />, description: '(+261) 33 84 879 63' },
  { icon: <FaEnvelope />, description: 'didierherlin18@gmail.com' },
  { icon: <FaMapMarkerAlt />, description: 'Toliara, Madagascar' },
];

/* ─── Composant ─────────────────────────────────────────────────── */
const Contact = () => {
  const { lang } = useLanguage();
  const tr = t[lang];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: 'easeIn' }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* ── Formulaire ── */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{tr.heading}</h3>
              <p className="text-white/60">{tr.subheading}</p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder={tr.firstName} />
                <Input type="text" placeholder={tr.lastName} />
                <Input type="email" placeholder={tr.email} />
                <Input type="tel" placeholder={tr.phone} />
              </div>

              {/* Select service */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={tr.serviceLabel} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{tr.serviceLabel}</SelectLabel>
                    <SelectItem value="web">{tr.services.web}</SelectItem>
                    <SelectItem value="desktop">{tr.services.desktop}</SelectItem>
                    <SelectItem value="mobile">{tr.services.mobile}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea className="h-[200px]" placeholder={tr.message} />

              {/* Bouton */}
              <Button size="md" className="max-w-fit">
                {tr.send}
              </Button>
            </form>
          </div>

          {/* ── Informations de contact ── */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactData.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center shrink-0">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{tr.info[index].label}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;