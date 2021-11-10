import React from 'react'
import Slider from 'react-slick'

import project1 from './assets/Kapture 2021-11-04 at 14.44.39.gif'
import project2 from './assets/Home.gif'
import project3 from './assets/Kapture 2021-11-03 at 10.43.39.gif'
import project4 from './assets/Kapture 2021-11-03 at 10.25.45.gif'

import bootstrap from './assets/tech logos/bootstrap.svg'
import css from './assets/tech logos/css-3.svg'
import django from './assets/tech logos/django-icon.svg'
import express from './assets/tech logos/express.svg'
import git from './assets/tech logos/git-icon.svg'
import github from './assets/tech logos/github-icon.svg'
import heroku from './assets/tech logos/heroku-icon.svg'
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

const Project = ({ fullpageApi }) => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  }

  return (
    <>
      <div className="arrowContainer">
        <button className="arrow up centerTop" onClick={() => fullpageApi.moveSectionUp()} />
      </div>
      <div>
        <h1>Projects</h1>
        <Slider {...settings}>
          <div className="project">
            <h3>Candy Island</h3>
            <a href="https://github.com/joinSamBalboa/Candy_Island#readme" target="_blank" rel="noreferrer"><img src={project1} alt="" /></a>
            <div className="text">
              <p>An anonymous consumer-to-consumer e-commerce website, selling sweets/candy that incorporates crypto currency as it’s method of payment. Built with an extensive back end using Django with all required relationships for future development and features. Front end was built using React, users can browse listings, order items, and leave reviews as buyers. As vendors, users can add new listings for sale and manage orders and it’s status.</p>
              <br/>
              <p>Tech Stack: <img src={python} alt="" /><img src={css} alt="" /><img src={js} alt="" /> <img src={git} alt="" /><img src={github} alt="" /> <img src={react} alt="" /><img src={netlify} alt="" /><img src={yarn} alt="" /> <img src={django} alt="" /><img src={node} alt="" /><img src={sass} alt="" /><img src={npm} alt="" /><img src={insomnia} alt="" /><img src={heroku} alt="" /><img src={bootstrap} alt="" /><img src={postgre} alt="" /></p>
            </div>
          </div>
          <div className="project">
            <h3>Homemade</h3>
            <a href="https://github.com/joinSamBalboa/Homemade-App#readme" target="_blank" rel="noreferrer"><img src={project2} alt="" /></a>
            <div className="text">
              <p>Homemade is a recipe website application where users can view homemade recipes submitted by homemade members. Team of three worked effectively building the back and front end of this recipe website where users could register/login to use the website. Single recipe, profile pages, recipe create/edit  were created by myself and made to improve user experience.</p>
              <br/>
              <p>Tech Stack: <img src={css} alt="" /><img src={js} alt="" /> <img src={git} alt="" /><img src={github} alt="" /> <img src={react} alt="" /><img src={netlify} alt="" /><img src={yarn} alt="" /> <img src={mongodb} alt="" /><img src={express} alt="" /><img src={node} alt="" /><img src={sass} alt="" /><img src={npm} alt="" /><img src={insomnia} alt="" /><img src={heroku} alt="" /></p>
            </div>
          </div>
          <div className="project">
            <h3>Pokédex</h3>
            <a href="https://github.com/joinSamBalboa/Pokedex-React-App#readme" target="_blank" rel="noreferrer"><img src={project3} alt="" /></a>
            <div className="text">
              <p>PokéDex React is an app that acts as a web based pokedex based on the popular game/show Pokémon. Users of the app are able to view a list of all ~900 pokemon in the pokemon universe as of 2021, where they are able to search pokemon by name andor filter by type. One a pokemon has been found, users can then click to find more information, including japanese mane, sprite, type, weight/height etc.. Within this page, users can also jump to next or previous evolutions if available. Another component, included &apos;Who&apos;s that Pokemon?&apos;, which generated a random pokemon from the database.</p>
              <br/>
              <p>Tech Stack: <img src={css} alt="" /><img src={js} alt="" /> <img src={git} alt="" /><img src={github} alt="" /> <img src={react} alt="" /><img src={netlify} alt="" /><img src={yarn} alt="" /><img src={sass} alt="" /><img src={npm} alt="" /><img src={insomnia} alt="" /><img src={heroku} alt="" /></p>
            </div>
          </div>
          <div className="project">
            <h3>Pickle Man</h3>
            <a href="https://github.com/joinSamBalboa/Pickle-Man-Pac-Man-clone#readme" target="_blank" rel="noreferrer"><img src={project4} alt="" /></a>
            <div className="text">
              <p>A Rick and Morty inspired Pac-Man clone using purely HTML, CSS, and Vanilla Javascript. User is able to control the main character, Pickle Man, who is tasked with collecting all of the mega seeds to escape the sewers he finds himself in, whilst avoiding the ghost-rats. The user is also able to use Szechuan sauces, placed in each corner of the game, to enable the ghost-rats be eliminated and get additional points.</p>
              <br/>
              <p>Tech Stack: <img src={html} alt="" /><img src={css} alt="" /><img src={js} alt="" /> <img src={git} alt="" /><img src={github} alt="" /></p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="arrowContainer">
        <button className="arrow down centerBottom" onClick={() => fullpageApi.moveSectionDown()} />
      </div>
    </>
  )
}

export default Project