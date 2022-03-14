import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import About from "./components/AboutMe/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Projects from "./components/ProjectPage/Projects";
import "./App.css";
import Certification from "./components/Certifications/Certification";

const certificationData = [
  {
    title: "React Native",
    brandName: "Udemy",
    img: "/images/udemy.jpg",
    href: "https://udemy-certificate.s3.amazonaws.com/image/UC-43d4c048-6ef5-4f1a-87be-bf31b62a8073.jpg",
  },
  {
    title: "Responsive Web Design",
    brandName: "FCC",
    img: "/images/FCC1.png",
    href: "https://www.freecodecamp.org/certification/fcc4e35a216-75a4-4c05-9850-79cb3a1afd0f/responsive-web-design"
  },
  {
    title: "JavaScript DSA",
    brandName: "FCC",
    img: "/images/FCC2.png",
    href: "https://www.freecodecamp.org/certification/fcc4e35a216-75a4-4c05-9850-79cb3a1afd0f/javascript-algorithms-and-data-structures"
  },
];

export default function App() {
  return (
    <Router>
      <Header />
      <LandingPage />
      <About />
      <Projects />
      {certificationData.map((item, index) => (
        <Certification
          title={item.title}
          img={item.img}
          brandName={item.brandName}
          key={index.toString()}
          href={item.href}
        />
      ))}
      <ContactMe />
      <Footer />
    </Router>
  );
}
