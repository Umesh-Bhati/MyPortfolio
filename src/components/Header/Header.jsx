import React, { useState } from "react";
import "./styles.css";
import { MenuIcon } from ".";
import Nav from "./Nav";
import { NavHashLink } from "react-router-hash-link";
import Logo from "./Logo";

export default function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    
      <header className="header">
        <NavHashLink className='logo' smooth to={'/'} >
         <Logo/>
          </NavHashLink>
          <MenuIcon clicked={clicked} setClicked={setClicked} />
        <Nav clicked={clicked} setClicked={setClicked}/>
      </header>

  
  );
}
