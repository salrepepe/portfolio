import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      about: "About",
      aboutMe: "About me",
      portfolio: "Portfolio",
      contacts: "Contacts",
      title: "Hi, I am Mukhammed-Saeed, Front-end Developer",
      skills: "Skills",
      subtitle:
        "Through constant practice & learning, I produce aesthetic software to an extremely high standard",
      download: "Download Resume",
      school:
        "School-gymnasium № 33 with an in-depth study of economics and law",
      schoolDescr:
        "When I entered 9th grade, I began to think about what I would do in life. I was interested in the profession SMM - manager, but once I visited a bomb site, I thought I wanted to do the same cool sites",
      itAcademy:
        "Not knowing anything about programming, here I began my way of a samurai, at first it was hard, but over time I began to understand the process and began to take the information easier",
      expirience: "Expirience",
      education: "Education",
      presentDay: "Present Day",
      viewDetails: "View Details",
      viewAll: "View All",
      myWorks: "My works",
      contactMe: "Contact Me",
      created: "Created",
      technologies: "Technologies",
      aboutMeTxt:
        "People call me Muha I develop web applications and I enjoy it. So far I want to become a professional in this field.",
      od: "After half a year of studies at the academy I got an internship in the company, wrote several projects, proved myself and got a position of Junior Front-End Developer and I still work here.",
      vievOnline: "View Online",
      phone: "Phone Number",
      social: "My socials",
      email: "Email",
    },
  },
  ru: {
    translation: {
      about: "Обо мне",
      aboutMe: "Обо мне",
      portfolio: "Портфолио",
      contacts: "Контакты",
      title: "Привет, я Мухаммед-Саид, front-end разработчик",
      skills: "Мои навыки",
      myWorks: "Мои работы",
      subtitle:
        "Постоянно практикуя и обучаясь, я создаю крутые сайты и приложения в соответствии с высочайшими стандартами.",
      download: "Скачать резюме",
      aboutMeTxt: `Я занимаюсь разработкой веб-приложений и получаю от этого удовольствие. Пока что хочу стать профессионалом в этой области Lorem50.`,
      expirience: "Опыт работы",
      education: "Образование",
      school: "Школа-гимназия № 33 с углубленным изучением экономики и права",
      schoolDescr:
        "Поступив в 9 класс стал задумываться о том, чем я буду заниматься в жизни. Мне была интересна профессия SMM - менеджера, но однажды посетив один бомбовый сайт, я подумал что хочу делать такие же крутые сайты",
      itAcademy:
        "Не зная ничего о програмировании, тут я начал свой путь самурая, поначалу давалось все тяжко, но со временем я уже начал вникать в процесс и стал легче воспринимать информацию",
      od: "Отучившись пол года в академии, я пошел стажироваться в эту компанию, написал несколько проектов, показал себя и меня взяли на позицию Junior Front-End Developer'a и по сей день я работаю тут.",
      presentDay: "По настоящее время",
      viewDetails: "Посмотреть детали",
      viewAll: "Посмотреть все",
      contactMe: "Свяжитесь со мной",
      created: "Дата",
      technologies: "Технологии",
      vievOnline: "Посмотреть",
      phone: "Номер телефона",
      social: "Социальные сети",
      email: "Электронная почта",
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["ru", "en"],
    fallbackLng: "ru",
    detection: {
      order: ["path", "localStorage", "htmlTag", "subdomain"],
      caches: ["localStorage"],
    },
    resources,
  });
export default i18n;
