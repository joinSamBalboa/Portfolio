import React from 'react'

const Experience = ({ fullpageApi }) => {


  return (
    <>

      <div className="arrowContainer">
        <button className="arrow up centerTop" onClick={() => fullpageApi.moveSectionUp()} />
      </div>
      <h1>Experience</h1>
      <div className="main">

        <div className="arrowContainer">
          <button className="arrow down centerBottom" onClick={() => fullpageApi.moveSectionDown().moveSectionDown()} />
        </div>
      </div>
    </>
  )
}

export default Experience