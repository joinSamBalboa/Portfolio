import React from 'react'
import { Experiment, Variant } from 'react-optimize'

const Home = ({ fullpageApi }) => {


  return (
    <>
      {/* <Experiment id="1">
        <Variant id="0"> */}
      <div className="main">
        <div className="logo ml-0">
          <h2><span className="themeGrey">Join</span><br /><span className="themeRed">Sam</span><br /><span className="themeBlack">Balboa.</span></h2>
          <p className="themeGrey"><span className="bold">Jason Abimbola</span> | Junior Software Engineer | London, E3</p>
        </div>
        <div className="quote">
          <p>Critical thinking is not something you do once with an issue and then drop it. It requires that we update our knowledge as new information comes in.<br /><br /><span className="themeGrey">-Daniel Levitin</span></p>
        </div>
      </div>
      <div className="arrowContainer">
        <button className="arrow down centerBottom" onClick={() => fullpageApi.moveSectionDown()} />
      </div>
      {/* </Variant> */}
      {/* <Variant id="1">
          <div className="main">
            <div className="logo ml-0">
              <h2><span className="themeGrey">Join</span><br /><span className="themeRed">Sam</span><br /><span className="themeBlack">Balboa.</span></h2>
              <p className="themeGrey"><span className="bold">Jason Abimbola</span> | Junior Software Engineer | London, E3</p>
            </div>
            <div className="quote">
              <p>Critical thinking is not something you do once with an issue and then drop it. It requires that we update our knowledge as new information comes in.<br /><br /><span className="themeGrey">-Daniel Levitin</span></p>
            </div>
          </div>
          <div className="arrowContainer">
            <button className="arrow down centerBottom" onClick={() => fullpageApi.moveSectionDown()} />
          </div>
        </Variant> */}
      {/* </Experiment> */}
    </>
  )
}

export default Home