import React from 'react'
import './projects.css'
import Portfolio from './Projects'

const Project = () => {
  return (
    <section className="portfolio section" id='portfolio'>
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <Portfolio />
    </section>
  )
}

export default Project