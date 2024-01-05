import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Mohamed</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>
            <li>
                <a href="#qualifications" className="footer__link">Qualifications</a>
            </li>
            <li>
                <a href="#services" className="footer__link">Services</a>
            </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.linkedin.com/in/hodanmoh/" className="footer__social-link" target={'_blank'} rel='noreferrer'>
                <i className="bx bxl-linkedin"></i>
            </a>

            <a href="https://dribbble.com/hodanmoh" className="footer__social-link" target={'_blank'} rel='noreferrer'>
                <i className="bx bxl-dribbble"></i>
            </a>

            <a href="https://github.com/hodanmohamed" className="footer__social-link" target={'_blank'} rel='noreferrer'>
                <i className="bx bxl-github"></i>
            </a>
        </div>

        <span className="footer__copy">© hodandev. All rights reserved.</span>
    </div>
   </footer>
  )
}

export default Footer