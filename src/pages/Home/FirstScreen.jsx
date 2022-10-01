import React from "react";
import "./index.css";
import me from "../../assets/images/me.webp";
import uploadedFileLink from "../../assets/images/cv.png";

const FirstScreen = ({ t }) => {
  return (
    <section className="firstScreen">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="flex-md-row flex-column-reverse d-flex">
          <div
            className="col-md-6 col-12"
            style={{
              zIndex: 10,
            }}
          >
            <h1 className="h1">{t("title")}</h1>
            <h5 className="h5">{t("subtitle")}</h5>
            {/* <a
              className="btn btn-secondary"
              href={uploadedFileLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              {t("download")}
            </a> */}
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center">
            <div className="img">
              <img src={me} alt="" />
            </div>
          </div>
        </div>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#8639FA"
            d="M48.8,-59.5C61.7,-47.3,69.6,-30.5,70.1,-14.4C70.5,1.7,63.4,17.1,54.7,30.8C45.9,44.5,35.4,56.5,23,59.2C10.7,62,-3.6,55.5,-18.5,50.3C-33.4,45.1,-49.1,41.2,-53.6,31.7C-58.1,22.2,-51.6,7.2,-48.2,-7.9C-44.9,-23,-44.7,-38.1,-37.2,-51.2C-29.7,-64.3,-14.9,-75.4,1.5,-77.3C17.9,-79.1,35.9,-71.6,48.8,-59.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="rectangle"></div>
      <div className="rectangle2"></div>
      <div className="rectangle3"></div>
      <div className="rectangle4"></div>
      <div className="rectangle5"></div>
      <div className="rectangle6"></div>
    </section>
  );
};

export default FirstScreen;
