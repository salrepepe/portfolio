import React, { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
import itStudio from "../../assets/images/portfolio/itStudio.webp";
import runSmart from "../../assets/images/portfolio/runSmart.webp";
import HouseVOP from "../../assets/images/portfolio/houseVop.webp";
import crypto from "../../assets/images/portfolio/crypto.webp";
import domket from "../../assets/images/portfolio/domket.webp";
import netex from "../../assets/images/portfolio/netex.webp";
import plantShop from "../../assets/images/portfolio/plant-shop.webp";
import oracleDigital from "../../assets/images/portfolio/oracle-digital.webp";
import { t } from "i18next";
import Dialog from "./Dialog";

const Portfolio = () => {
  const [project, setProject] = useState({ open: false });

  const currentProject = slides.find((item) => item.name === project.name);

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
    >
      <section className="portfolioM">
        <div className="container">
          <h1 className="h1 title">{t("myWorks")}</h1>
          <div className="row slides">
            {slides.map((item, idx) => (
              <div
                className="col col-12 col-md-6 col-lg-4"
                ket={idx}
                onClick={() => {
                  document.body.classList.add("scrolled-body");
                  setProject({ ...project, name: item.name, open: true });
                }}
              >
                <div className="slide">
                  <img src={item.img} alt="" />
                  <h5 className="h5">{item.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={project.open ? "overlay overlay_visible" : "overlay"}>
        {project.open && (
          <Dialog item={currentProject} setProject={setProject} />
        )}
      </div>
    </motion.main>
  );
};

export default Portfolio;

const slides = [
  {
    img: itStudio,
    color: "#4985ff",
    name: "IT - Studio",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "December 2020",
    technologies: "HTML, CSS, Javascript, JQuery, OwnCarousel",
    link: "https://salrepepe.github.io/IT-studio/",
  },

  {
    img: runSmart,
    name: "RunSmart",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "January 2021",
    technologies: "HTML, CSS, Javascript, JQuery, OwnCarousel",
    link: "https://salrepepe.github.io/RunSmart/",
    color: "#00bb29",
  },
  {
    img: HouseVOP,
    color: "#d4c17e",
    name: "HouseVOP",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "February 2021",
    technologies: "HTML, CSS, Javascript, JQuery, OwnCarousel",
    link: "https://salrepepe.github.io/HouseVop/",
  },
  {
    img: plantShop,
    color: "#355342",
    name: "Plant Shop",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "February 2021",
    technologies: "HTML, CSS, Javascript",
    link: "https://salrepepe.github.io/plant-shop/",
  },
  {
    img: "",
    color: "",
    name: "ToDo App",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "April 2021",
    technologies: "HTML, CSS, Javascript, React, Redux",
    link: "https://app-tod1.herokuapp.com/",
  },
  {
    img: crypto,
    color: "#f8b91a",
    name: "Crypto",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "May 2021",
    technologies: "HTML, CSS, Javascript, React, React-Slick, Redux",
    link: "https://cryptokeke.herokuapp.com/",
  },
  {
    img: oracleDigital,
    color: "#4b81c2",
    name: "Oracle Digital",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "May 2021",
    technologies: "HTML, CSS, Javascript, React, Redux, React-Slick",
    link: "https://oracle-digital.herokuapp.com/",
  },
  {
    img: domket,
    color: "#00bb29",
    name: "Domket",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "June - September 2021",
    technologies: "HTML, CSS, Javascript, React, Redux, React-Slick, 2Gis",
    link: "https://domket.kg",
  },
  {
    img: netex,
    color: "#fce34c",
    name: "Netex",
    descr:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi pariatur officiis modi debitis error animi corporis nostrum! Fugiat corporis porro mollitia accusamus, aspernatur saepe. Facilis deserunt ullam eligendi adipisci. Maxime laboriosam expedita fuga dignissimos, perspiciatis nobis voluptatibus dolores repellat asperiores!",
    date: "November - December 2021",
    technologies: "HTML, CSS, Javascript, React, Redux, React-Slick, 2Gis",
    link: "https://netex.kg",
  },
];
