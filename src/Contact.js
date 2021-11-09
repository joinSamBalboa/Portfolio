import React from 'react'


import github from './assets/tech logos/github-icon.svg'
import msn from './assets/tech logos/msn.svg'
import linkedin from './assets/tech logos/linkedin-icon.svg'

const Contact = ({ fullpageApi }) => {

  return (
    <>
      
      <div className="arrowContainer">
        <button className="arrow up centerTop" onClick={() => fullpageApi.moveSectionUp()} />
      </div>
      <h1>Contact</h1>
      <div className="details">
        <a href="mailto:jasonabimbola@msn.com?subject=Hey Jason, I found your website..." target="_blank" rel="noreferrer"><img src={msn} alt={msn} /></a>
        <a href="https://github.com/joinSamBalboa/" target="_blank" rel="noreferrer"><img src={github} alt={github} /></a>
        <a href="https://www.linkedin.com/in/joinsambalboa/" target="_blank" rel="noreferrer"><img src={linkedin} alt={linkedin} /></a>
      </div>
    </>
  )

}

export default Contact