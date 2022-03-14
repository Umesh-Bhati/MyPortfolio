import React from "react";
import { LeftSocialIcons, PurpleArrows } from ".";
import { DarkWave } from "../Waves";
import "./styles.css";

export default function LandingPage() {
  return (
    <main className="landing">
      <section className="intro">
        <span className="landing__sub-headline">Hi, my name is</span>
        <h1 className="landing__headline">Umesh Bhati.</h1>
        <h1 className="landing__headline">I like to code.</h1>
      </section>
      <hr className="hr" />
      <section className="intro-bottom">
        <h1 className="landing__headline">Engineering Background</h1>
        <h1 className="landing__headline">Student.</h1>
      </section>
      <PurpleArrows />
      <LeftSocialIcons />
      <DarkWave />
    </main>
  );
}
