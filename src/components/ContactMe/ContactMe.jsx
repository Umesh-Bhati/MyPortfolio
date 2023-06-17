import React from 'react'
import { FaLinkedin, FaMailBulk } from 'react-icons/fa'
import { LightWave } from '../Waves'
import './styles.css'

export default function ContactMe() {
  return (
   <main id='contact'  className='contact' >
       <div data-aos="fade-right" className="contact__body" >
       <h1 className='title' >Contact Me</h1>
       <p className='contact__p' >Currently I am looking for a Front-End Developement Job</p>
       <section className="contact__option">
          <FaMailBulk className="contact__option__logo" size={45} />
          <a href="mailto: umeshbhatipro@gmail.com">
            <span className="contact__option__text">umeshbhatipro@gmail.com</span>
          </a>
        </section>
        <section className="contact__option">
          <FaLinkedin className="contact__option__logo" size={45} />
          <a
            href="https://www.linkedin.com/in/umesh-bhati-b7b557207/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="my Linkedin"
          >
            <span className="contact__option__text">umesh-bhati</span>
          </a>
        </section>
      </div>
      <LightWave />
   </main>
  )
}
