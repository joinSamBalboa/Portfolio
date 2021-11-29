import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Project from './Projects'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Interests from './Interests'





const Fullpage = () => (
  <ReactFullpage



    //fullpage options
    licenseKey={'2EbGUEC&z8'}
    scrollingSpeed={1000} /* Options here */

    render={({ fullpageApi }) => {
      return (
        <>
          <ReactFullpage.Wrapper>
            <div className="section home" data-anchor="Home">
              <Home fullpageApi={fullpageApi} />
            </div>
            <div className="section about" data-anchor="About">
              <About fullpageApi={fullpageApi} />
            </div>
            <div className="section interest" data-anchor="Interests">
              <Interests fullpageApi={fullpageApi} />
            </div>
            <div className="section project" data-anchor="Project">
              <Project fullpageApi={fullpageApi} />
            </div>
            <div className="section contact" data-anchor="Contact">
              <Contact fullpageApi={fullpageApi} />
            </div>

          </ReactFullpage.Wrapper>
        </>
      )
    }}
  />
)

export default Fullpage