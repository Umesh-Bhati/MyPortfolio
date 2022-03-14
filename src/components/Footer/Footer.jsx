import React from "react";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Logo } from "../Header";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer__Footer">
      <section className="social__container">
        <hr className="footer__hr" />
        <a
          href="https://github.com/Umesh-Bhati"
          className="social-icons"
          target={"_blank"}
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          className="social-icons"
          href="https://www.linkedin.com/in/umesh-bhati-b7b557207/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <hr className="footer__hr" />
      </section>
      <Logo/>
      <p className="copyright" >Copyright @ 2022 Umesh Bhati.</p>

      <a
        className="sourceCodeLink"
        href="https://github.com/Umesh-Bhati/MyPortfolio"
        target="_blank"
        aria-label="Website GitHub Repository"
        rel="noreferrer"
      >
        <FaGithub size={30} className="sourceCodeLink__github" />
        <h3>Check out the source code</h3>
        <FaExternalLinkAlt className="sourceCodeLink__externalLink" />
      </a>
    </footer>
  );
}
