import { t } from "i18next";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import domket from "../../assets/images/portfolio/domket.webp";
import netex from "../../assets/images/portfolio/netex.webp";
// import oracleDigital from "../../assets/images/portfolio/oracle-digital.webp";
import doce from "../../assets/images/portfolio/doce.png";

const Portfolio = () => {
  const [slide, setSlide] = useState(null);

  const navigate = useNavigate();

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
              <h2
                className="h2"
                style={{ color: item.name === "DOCExpress" ? "#000" : "#FFF" }}
              >
                {item.name}
              </h2>
            </a>
          ))}
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/portfolio")}
        >
          {t("viewAll")}
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

const slides = [
  {
    img: doce,
    color: "#FFB951",
    name: "DOCExpress",
    descr: "DOCExpress - быстро и надежно доставят все что можно.",
    date: "January - February 2022",
    technologies: "React, Redux, Yandex Maps, Material UI",
    link: "https://doce.kg/",
  },
  {
    img: netex,
    name: "Netex",
    date: "November - December 2021",
    technologies: "HTML, CSS, Javascript, React, Redux, React-Slick, 2Gis",
    link: "https://netex.kg",
  },

  {
    img: domket,
    name: "Domket",
    date: "June - September 2021",
    technologies: "HTML, CSS, Javascript, React, Redux, React-Slick, 2Gis",
    link: "https://domket.kg",
  },
  // {
  //   img: oracleDigital,
  //   name: "Oracle Digital",
  //   descr: t("odProject"),
  //   date: "May 2021",
  //   technologies: "HTML, CSS, Javascript, React, Redux, React-Slick",
  //   link: "https://oracle-digital.herokuapp.com/",
  // },
];
