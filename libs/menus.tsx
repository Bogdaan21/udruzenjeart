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
      label: language === "en" ? "Appointment" : "Prijava",
      link: "/appointment/",
    },
    {
      label: language === "en" ? "Contact" : "Kontakt",
      link: "/contact/",
    },
  ];

  return menus;
};