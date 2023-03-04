import React, { useState } from 'react';
import { RxTriangleRight } from 'react-icons/rx'
import './experience.scss';

const Experience = () => {
  const [isActiveJob1, setIsActiveJob1] = useState(true)
  const [isActiveJob2, setIsActiveJob2] = useState(false)
  const [isActiveJob3, setIsActiveJob3] = useState(false)
  const [isActiveJob4, setIsActiveJob4] = useState(false)


  const showJob1 = () => {
    setIsActiveJob1(true)
    setIsActiveJob2(false)
    setIsActiveJob3(false)
    setIsActiveJob4(false)
  }

  const showJob2 = () => {
    setIsActiveJob1(false)
    setIsActiveJob2(true)
    setIsActiveJob3(false)
    setIsActiveJob4(false)
  }

  const showJob3 = () => {
    setIsActiveJob1(false)
    setIsActiveJob2(false)
    setIsActiveJob3(true)
    setIsActiveJob4(false)
  }

  const showJob4 = () => {
    setIsActiveJob1(false)
    setIsActiveJob2(false)
    setIsActiveJob3(false)
    setIsActiveJob4(true)
  }

  return (
    <div className='experience' id='experience'>
      <div className='experience__container'>
        <div className='experience__header__container'>

          <h1 className='experience__header'>
            <span className='header--number'>02.</span> Where I've Worked
          </h1>

          <div className='header--line'></div>

        </div>

        <br />
        <br />

        <div className='experience__job__container'>

          <div className='experience__list__container'>

            <div className='list__transition--line'></div>


            <ul className='experience__list'>

              <li className='job__company-name'>
                {/* <button className='job__list--btn' onClick={() => showJob1()} autoFocus> */}
                <button className={isActiveJob1 ? 'job__list--btn list__focus' : 'job__list--btn'} onClick={() => showJob1()} autoFocus>
                  OE Works
                </button>
              </li>

              <li className='job__company-name'>
                {/* <button className='job__list--btn' onClick={() => showJob2()}> */}
                <button className={isActiveJob2 ? 'job__list--btn list__focus' : 'job__list--btn'} onClick={() => showJob2()}>
                  Phil. Granite
                </button>
              </li>

              <li className='job__company-name'>
                <button className={isActiveJob3 ? 'job__list--btn list__focus' : 'job__list--btn'} onClick={() => showJob3()}>
                  CNI Global
                </button>
              </li>

              <li className='job__company-name'>
                <button className={isActiveJob4 ? 'job__list--btn list__focus' : 'job__list--btn'} onClick={() => showJob4()}>
                  AGCHEM
                </button>
              </li>

            </ul>


          </div>

          <div className='experience__job-description'>

            <div className={isActiveJob1 ? 'job__des job--active' : 'job__des'}>

              <h2 className='job__header'>
                Graphic Design Artist
                <span> @ OE Works Mfg. Inc.</span>
              </h2>

              <p className='job__date'>
                Jul 2019 - Aug 2021
              </p>

              <br />

              <div className='job__scope__container'>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Gathering and evaluating user requirements, in collaboration with product managers and engineers.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Designing graphic user interface elements, like menus, tabs and widgets.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Develop UI mockups and prototypes that clearly illustrate how the product function and look like.
                  </p>

                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Conduct layout adjustments based on user feedback.
                  </p>
                </div>

              </div>


            </div>

            <div className={isActiveJob2 ? 'job__des job--active' : 'job__des'}>
              <h2 className='job__header'>
                Draftsman
                <span> @  Phil. Granite Stone Corp.</span>
              </h2>

              <p className='job__date'>
                Feb 2018 - Jul 2019
              </p>

              <br />

              <div className='job__scope__container'>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Prepares work to be estimated by gathering proposals, blueprints, specification, and related documents.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Communicate with team members regarding new and current projects.
                  </p>

                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Prepares Shop drawings, Working drawings and Proposal layouts.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Review and evaluate cost estimates.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Understand scope of work to bid.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Prepare cost analysis.
                  </p>
                </div>

              </div>

            </div>

            <div className={isActiveJob3 ? 'job__des job--active' : 'job__des'}>
              <h2 className='job__header'>
                IT Staff | Graphic Designer
                <span> @ CNI Global Inc.</span>
              </h2>

              <p className='job__date'>
                May 2017 - Nov 2017
              </p>

              <br />

              <div className='job__scope__container'>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    I monitor and maintain the computer systems and networks of my organization.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Installing and configuring computer systems,
                    diagnosing hardware and software faults and solve technical and applications problems, either over the phone or in person.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    As Graphic designer I develop the overall layout and production design for advertisements,
                    brochures, magazines, and corporate reports.
                  </p>
                </div>

              </div>

            </div>

            <div className={isActiveJob4 ? 'job__des job--active' : 'job__des'}>
              <h2 className='job__header'>
                Autocad Designer
                <span> @ AGCHEM Construction & Devt. Corp.</span>
              </h2>

              <p className='job__date'>
                Jun 2015 - Mar 2016
              </p>

              <br />

              <div className='job__scope__container'>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Performs CAD drawings for both Fire protection and Plumbing Proposal Layouts.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Responsible for the As-builts of Fire protection, Plumbing sleeves/pipes installed.
                  </p>
                </div>


                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Produces sections, elevation and details to demonstrate practical installations.
                  </p>
                </div>

                <div className='job__scope__sub-container'>
                  <div className='bullet--icon__container'>
                    <RxTriangleRight className='bullet--icon' />
                  </div>


                  <p className='job__scope'>
                    Prepares and submits reports and documents required by the Management.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div >
  )
}

export default Experience