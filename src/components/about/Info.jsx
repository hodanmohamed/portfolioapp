import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">3 Years</span>
      </div>

      <div className="about__box">
      <i className='bx bx-briefcase-alt-2 about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10 + Projects</span>
      </div>

      <div className="about__box">
      <i class='bx bxs-heart-circle about__icon available__color'></i>
        <h3 className="about__title ">Currently</h3>
        <span className="about__subtitle">Available</span>
      </div>

    </div>
  )
}

export default Info