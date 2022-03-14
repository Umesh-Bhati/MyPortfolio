import { FaGithub } from "react-icons/fa";
import DarkWave from "../Waves/DarkWave";
import "./ProjectLight.css";
import { useMediaQuery } from "react-responsive";

function Project1({ id }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  return (
    <article id={id} className="project light">
      <h2 className="project__header">Projects</h2>
      <div className="project__main">
        <img
          className="project__image project__specialMobileImage"
          src="/images/Uber5.png"
          alt="Uber Clone Map"
          width="15%"
          height="auto"
          loading="lazy"
        />
        {isDesktopOrLaptop ? (
          <>
            <img
              className="project__image"
              src="/images/Uber2.png"
              alt=" Uber Clone Home Screen"
              width="15%"
              height="auto"
              loading="lazy"
            />
            <img
              className="project__image"
              src="/images/Uber4.png"
              alt="Uber Clone Search Location Screen"
              width="15%"
              height="auto"
              loading="lazy"
            />
          </>
        ) : (
          <> </>
        )}

        <div data-aos="fade-left" className="project__right">
          <h3 className="project__title">Uber Clone</h3>
          <p className="project__description project__body">
            A <span className="project__specialText"> Uber Clone mobile app</span> with a nice{" "}
            <span className="project__specialText">
              zoom in Animation
            </span>
            , when user reach out to final or destination screen after search destination location and also using google direction API. This app is only for{" "}
            <span className="project__specialText" >Demo Purpose </span>
          </p>
          <p className="project__tech project__body">
            &gt; React Native · Google Maps API · Google
            Autocomplete API
          </p>
          <a
            className="project__sourceCode"
            href="https://github.com/Umesh-Bhati/UberClone"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="=Website GitHub Repository"
          >
            <FaGithub className="project__githubLogo" size={25} />
            <h3 className="project__sourceCodeText">Source Code</h3>
          </a>
        </div>
      </div>
      <DarkWave />
    </article>
  );
}

export default Project1;
