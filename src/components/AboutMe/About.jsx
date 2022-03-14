import React, { useEffect } from "react";
import { LightWave } from "../Waves";
import "./styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavHashLink } from "react-router-hash-link";
export default function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main id="about" className="AboutMain">
      <section data-aos="fade-right" className="paraSection">
        <h1>About Me</h1>
        <p className="paraSection__subLines" >
          I am a self-taught Javascript developer with Udemy certified and
          B.Tech student. I’ve always found Codding intuitive and have push
          myself to learn the most effective ways to achieve a result. I’m deep
          study learner and can quickly integrate into team so I can provide
          value to the company and the customers.
          <br />
          You can reach out to me on my{" "}
          <NavHashLink className="about__specialText" smooth to="#contact">
            contact
          </NavHashLink>{" "}
          page
        </p>
      </section>

      <div className="About-img">
        <img
          src="/images/UB.jpeg"
          alt="umesh bhati img"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <LightWave />
    </main>
  );
}
