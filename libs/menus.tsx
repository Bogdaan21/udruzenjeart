import { useLanguage } from "@/context/LanguageContext";

export const useMenus = () => {
  const { language } = useLanguage();

  const menus = [
    {
      label: language === "en" ? "Home" : "Početna",
      link: "/",
    },
    {
      label: language === "en" ? "About" : "O nama",
      link: "/about/",
    },
    {
      label: language === "en" ? "Agenda" : "Agenda",
      link: "/agenda/",
    },
    {
      label: language === "en" ? "Congress" : "Kongres",
      link: "/congress/",
    },
    {
      label: language === "en" ? "Contact" : "Kontakt",
      link: "/contact/",
    },
  ];

  return menus;
};
