import React, { useState } from 'react'
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id='qualifications'>
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personal journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Front-End Developer & UX/UI Designer</h3>
                            <span className="qualification__subtitle">Freelance - Remote</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> June 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>


                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Graduate Frontend Developer</h3>
                            <span className="qualification__subtitle">Nibble - Remote</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Apr 2022 - May 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">Business Systems Development Intern</h3>
                            <span className="qualification__subtitle">University of Westminster - Remote</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Aug 2020 - Jul 2021
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Informatics Work Experience Placement</h3>
                            <span className="qualification__subtitle">NHS NWL Collaboration of CCGs - London</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Jul 2016
                            </div>
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSc Computer Science</h3>
                            <span className="qualification__subtitle">London - University of Westminster</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">GCSEs and A-levels</h3>
                            <span className="qualification__subtitle">London - Queen Elizabeth's Girls School</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2009 - 2017
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification