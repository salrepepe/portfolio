import { t } from "i18next";
import React, { useState } from "react";
import domket from "../../assets/images/portfolio/domket.webp";
import netex from "../../assets/images/portfolio/netex.webp";
import oracleDigital from "../../assets/images/portfolio/oracle-digital.webp";

const Portfolio = () => {
  const [slide, setSlide] = useState(null);

  return (
    <section class="portfolio dark" id="portfolio">
      <div className="container">
        <h2 className="h1 title">{t("portfolio")}</h2>
        <div className="slides">
          {slides.map((item, idx) => (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              key={idx}
              onClick={() => setSlide(item.name)}
              className={slide === item.name ? "slide slide_active" : "slide"}
            >
              <img src={item.img} alt="" />
              <h2 className="h2">{item.name}</h2>
            </a>
          ))}
        </div>
        <button className="btn btn-secondary">{t("viewAll")}</button>
      </div>
    </section>
  );
};

export default Portfolio;

const slides = [
  {
    img: oracleDigital,
    name: "Oracle Digital",
    descr: t("odProject"),
    date: "May 2021",
    technologies: "HTML, CSS, Javascript, React, Redux, React-Slick",
    link: "https://oracle-digital.herokuapp.com/",
  },
  {
    img: domket,
    name: "Domket",
    date: "June - September 2021",
    technologies: "HTML, CSS, Javascript, React, Redux, React-Slick, 2Gis",
    link: "https://domket.kg",
  },
  {
    img: netex,
    name: "Netex",
    date: "November - December 2021",
    technologies: "HTML, CSS, Javascript, React, Redux, React-Slick, 2Gis",
    link: "https://netex.kg",
  },
];
