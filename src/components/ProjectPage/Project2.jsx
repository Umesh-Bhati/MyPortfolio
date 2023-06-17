import { FaGithub } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import "./ProjectDark.css";
import { LightWave } from "../Waves";

function Project2() {

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 769px)",
      });

  return (
    <article className="project dark">
      <div className="project__main">
        <div data-aos="fade-right" className="project__left">
          <h3 className="project__title project__titleDark">
            Food Delivery App
          </h3>
          <p className="project__description project__body">
            A <span className="project__specialText">Food Delivery App</span> project
            for Demo Purpose only
          </p>
          <p className="project__tech project__body">
            &gt; React Native · React Native Reanimated · React Navigation
          </p>
          <a
            className="project__sourceCodeDark"
            href="https://github.com/Umesh-Bhati/Foody"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
        <img
          className="project__image project__specialMobileImage"
          src="/images/foody (7).png"
          alt="Uber Clone Map"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop ? (
          <>
            <img
              className="project__image"
              src="/images/foody (8).png"
              alt=" Uber Clone Home Screen"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/foody (1).png"
              alt="Uber Clone Search Location Screen"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        ) : (
          <> </>
        )}
      </div>
      <LightWave />
    </article>
  );
}

export default Project2;
