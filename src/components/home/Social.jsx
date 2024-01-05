import React from 'react'
import './home.css'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/hodanmoh/" className="home__social-icon" target={'_blank'} rel='noreferrer'>
          <i className="bx bxl-linkedin"></i>
        </a>

        <a href="https://dribbble.com/hodanmoh" className="home__social-icon" target={'_blank'} rel='noreferrer'>
          <i className="bx bxl-dribbble"></i>
        </a>

        <a href="https://github.com/hodanmohamed" className="home__social-icon" target={'_blank'} rel='noreferrer'>
          <i className="bx bxl-github"></i>
        </a>
    </div>
  )
}

export default Social