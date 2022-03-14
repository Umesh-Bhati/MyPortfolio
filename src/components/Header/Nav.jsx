import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

export default function Nav({ clicked, setClicked }) {
  const navItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#project1",
    },
    {
      name: "Certifications",
      link: "#certifications",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <nav className={`nav ${clicked ? "isActive" : ""}`}>
      {navItems.map((item, index) => (
        <NavHashLink
          key={index.toString()}
          scroll={(el) =>
            el.scrollIntoView({
              behavior: "smooth",
              block: `${item.name === "Contact" ? "start" : "end"}`,
            })
          }
          to={`/${item.link}`}
          className="nav__item"
          onClick={() => setClicked(!clicked)}
        >
          <h3>{item.name}</h3>
        </NavHashLink>
      ))}
      <Link
        className="nav__item nav__resumeBtn"
        to="/umesh_bhati_resume.pdf"
        target="_blank"
      >
        <h3>Resume</h3>
      </Link>
    </nav>
  );
}
