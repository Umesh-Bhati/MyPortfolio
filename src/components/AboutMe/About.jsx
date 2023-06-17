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
          Hello, I'm a hybrid mobile app and web developer specializing in React Native. With experience building projects
          such as Uber clones, food delivery apps, and e-commerce websites, I've developed a deep understanding of what
          it takes to create scalable and efficient applications using JavaScript, Node.js, MongoDB and Firebase.
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
          src="/images/Umesh1.png"
          alt="umesh bhati img"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <LightWave />
    </main>
  );
}
