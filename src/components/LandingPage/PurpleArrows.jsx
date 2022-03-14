import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import {ReactComponent as BtmPurpleArrow} from "../../assets/images/bottom_purple_arrows.svg"
import './styles.css'

export default function PurpleArrows() {
  return (
    <NavHashLink
      className="purpleArrows"
      to="/#about"
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
    >
    <BtmPurpleArrow/>
    </NavHashLink>
  )
}
