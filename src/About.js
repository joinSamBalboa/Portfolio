import React from 'react'

import bootstrap from './assets/tech logos/bootstrap.svg'
import css from './assets/tech logos/css-3.svg'
import django from './assets/tech logos/django-icon.svg'
import express from './assets/tech logos/express.svg'
import git from './assets/tech logos/git-icon.svg'
import github from './assets/tech logos/github-icon.svg'
import heroku from './assets/tech logos/heroku-icon.svg'
import homebrew from './assets/tech logos/homebrew.svg'
import html from './assets/tech logos/html-5.svg'
import insomnia from './assets/tech logos/insomnia.svg'
import js from './assets/tech logos/javascript.svg'
import mongodb from './assets/tech logos/mongodb.svg'
import netlify from './assets/tech logos/netlify.svg'
import node from './assets/tech logos/nodejs-icon.svg'
import npm from './assets/tech logos/npm-icon.svg'
import postgre from './assets/tech logos/postgresql.svg'
import python from './assets/tech logos/python.svg'
import react from './assets/tech logos/react.svg'
import sass from './assets/tech logos/sass.svg'
import yarn from './assets/tech logos/yarn.svg'



const About = ({ fullpageApi }) => {

  return (
    <>

      <div className="arrowContainer">
        <button className="arrow up centerTop" onClick={() => fullpageApi.moveSectionUp()} />
      </div>
      <h1>About</h1>
      <div className="main">
        <div className="aboutText">
          <p>Software engineering/development, web development, full-stack, front-end/back-end, are different names I’ve come across for what I now do, but I didn’t exactly know what the difference was when I first started, if there even is one. All I know is that my passion for coding gets stronger and stronger the more I learn and the more I apply myself. I’ve always enjoyed using logical reasoning and critical thinking to solve many issues that have come about and I’ve now found the perfect purpose for it while also enjoying what I do. My background has been in sales and finance, where I’ve spent plenty of time solving problems for clients working as hard as I possibly could to meet their needs. I have an economics degree which is coming more and more useful as I tackle new concepts in which I have to be open in the was I deal with them. I want to look back after 2/5/10 years and be amazed with how much I’ve learnt and contributed. I want to be great at what I do and I can only do this by learning.</p>
        </div>
        <div className="techStack">
          <div className="logos">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={bootstrap} alt="" />
                </div>
                <div className="flip-card-back">
                  <p>Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={css} alt="" />
                </div>
                <div className="flip-card-back">
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={django} alt={django} />
                </div>
                <div className="flip-card-back">
                  <p>Django</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={express} alt={express} />
                </div>
                <div className="flip-card-back">
                  <p>Express</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={git} alt={git} />
                </div>
                <div className="flip-card-back">
                  <p>Git</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={github} alt={github} />
                </div>
                <div className="flip-card-back">
                  <p>GitHub</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={heroku} alt={heroku} />
                </div>
                <div className="flip-card-back">
                  <p>Heroku</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={homebrew} alt={homebrew} />
                </div>
                <div className="flip-card-back">
                  <p>Homebrew</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={html} alt={html} />
                </div>
                <div className="flip-card-back">
                  <p>HTML5</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={insomnia} alt={insomnia} />
                </div>
                <div className="flip-card-back">
                  <p>Insomnia</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={js} alt={js} />
                </div>
                <div className="flip-card-back">
                  <p>JavaScript</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={mongodb} alt={mongodb} />
                </div>
                <div className="flip-card-back">
                  <p>MongoDB</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={netlify} alt={netlify} />
                </div>
                <div className="flip-card-back">
                  <p>Netlify</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={node} alt={node} />
                </div>
                <div className="flip-card-back">
                  <p>Node.js</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={npm} alt={npm} />
                </div>
                <div className="flip-card-back">
                  <p>NPM</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={postgre} alt={postgre} />
                </div>
                <div className="flip-card-back">
                  <p>PostgreSQL</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={python} alt={python} />
                </div>
                <div className="flip-card-back">
                  <p>Python</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={react} alt={react} />
                </div>
                <div className="flip-card-back">
                  <p>React.js</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={sass} alt={sass} />
                </div>
                <div className="flip-card-back">
                  <p>SASS</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={yarn} alt={yarn} />
                </div>
                <div className="flip-card-back">
                  <p>Yarn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="arrowContainer">
        <button className="arrow down centerBottom" onClick={() => fullpageApi.moveSectionDown().moveSectionDown()} />
      </div>
    </>
  )

}

export default About