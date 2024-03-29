import React from "react";
import "./styles.css";
import { SiUdemy } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";
import { DarkWave, LightWave } from "../Waves";

export default function Certification({ img, title, brandName, href, index }) {
  const containerClass = `certificaition ${index % 2 === 0 ? "light" : "dark"}`;
  return (
    <article className={containerClass} id={brandName === "Udemy" ? "certifications" : ""} >
      {brandName === "Udemy" ? <h2 className="certificationH2" >Certifications</h2> : null}
      <div data-aos="fade-left" className="certification__container">
        <h3 className="certification__title">{title}</h3>
        <div className="certification__providerContainer">
          <h3 className="certified-title">Certified By :-</h3>
          <h3 className="certified-title">{brandName}</h3>
          {(brandName === "Udemy" && (
            <a
              href="https://about.udemy.com/"
              target="_blank"
              className="certification__icon"
              rel="noreferrer"
            >
              <SiUdemy size={30} className="certification__icon" />
            </a>
          )) || (
              <a
                href="https://www.freecodecamp.org/news/about/"
                target="_blank"
                className="certification__icon"
                rel="noreferrer"
              >
                <FaFreeCodeCamp className="certification__icon" size={30} />
              </a>
            )}
        </div>
      </div>
      <a className="imgContainer" href={href} target="_blank" rel="noreferrer" >
        <img
          src={img}
          className="certification__image"
          width="100%"
          height="auto"
          data-aos="fade-right"
          alt="umesh bhati certifications"
        />
      </a>
      {index % 2 === 0 ? <DarkWave /> : <LightWave />}
    </article>
  );
}
