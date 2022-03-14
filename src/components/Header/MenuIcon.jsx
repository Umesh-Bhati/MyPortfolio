import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './styles.css'

export default function MenuIcon({clicked, setClicked}) {
  return (
    <div onClick={() => setClicked(!clicked)} className='menuIcon' >
      {clicked ? (
        <FaTimes className="menuIcon__icon" size={30} />
      ) : (
        <FaBars className="menuIcon__icon" size={30} />
      )}
    </div>
  );
}
