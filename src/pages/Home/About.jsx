import React, { useState } from "react";
import akio from "../../assets/images/about/akio.webp";

const About = ({ t }) => {
  const [tab, setTab] = useState("education");

  const education = [
    {
      date: "2012 - 2021",
      place: t("school"),
      descr: t("schoolDescr"),
    },
    {
      date: "24.11.2020 - 25.05.2021",
      place: "IT - Academy 'IT-RUN'",
      descr: t("itAcademy"),
    },
  ];

  const expirience = [
    {
      date: `15.05.2021 - ${t("presentDay")}`,
      place: "Oracle Digital",
      descr: t("od"),
    },
  ];

  return (
    <section className="about dark" id="about">
      <div className="container">
        <h2 className="h1 title">{t("aboutMe")}</h2>
        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img src={akio} alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <h4 className="h6">{t("aboutMeTxt")}</h4>
            <h3 className="h4">{t("skills")}</h3>
            <ul className="skills">
              {skills.map((item) => (
                <li className="h6">{item}</li>
              ))}
            </ul>
            <div className="tabs">
              <span
                className={tab === "education" ? "tab h5 tab_active" : "tab h5"}
                onClick={() => setTab("education")}
              >
                {t("education")}
              </span>
              <span
                className={
                  tab === "expirience" ? "tab h5 tab_active" : "tab h5"
                }
                onClick={() => setTab("expirience")}
              >
                {t("expirience")}
              </span>
            </div>
            <ul className="roadmap">
              {tab === "education"
                ? education.map((item) => (
                    <li className="timeline">
                      <span className="date h5">{item.date}</span>
                      <span className="place h6">{item.place}</span>
                      <span className="descr h6">{item.descr}</span>
                    </li>
                  ))
                : expirience.map((item) => (
                    <li className="timeline">
                      <span className="date h5">{item.date}</span>
                      <span className="place h6">{item.place}</span>
                      <span className="descr h6">{item.descr}</span>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "React",
  "Sass, Less, Stylus",
  "Bootstrap",
  "Material UI",
  "BEM - Metodology",
  "Node JS",
  "Mongo DB",
  "Git",
  "Ctrl + C / Ctrl + V",
];
