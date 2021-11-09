import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Project from './Projects'
import Home from './Home'
import About from './About'
import Contact from './Contact'



const Fullpage = () => (
  <ReactFullpage

    //fullpage options
    licenseKey = {null}
    scrollingSpeed={1000} /* Options here */

    render={({ fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section home">
            <Home fullpageApi={fullpageApi} />
          </div>
          <div className="section about">
            <About fullpageApi={fullpageApi} />
          </div>
          <div className="section project">
            <Project fullpageApi={fullpageApi} />
          </div>
          <div className="section contact">
            <Contact fullpageApi={fullpageApi} />
          </div>

        </ReactFullpage.Wrapper>
      )
    }}
  />
)

export default Fullpage