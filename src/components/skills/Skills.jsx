import React from 'react'
import "./skills.css"
import Development from './Development'
import Design from './Design'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            <Development />
            <Design />
        </div>
    </section>
  )
}

export default Skills