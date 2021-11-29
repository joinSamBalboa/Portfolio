import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

import music from './assets/interests/IMG_5779.JPG'
import food from './assets/interests/IMG_8355.jpg'
import fpl from './assets/interests/Fantasy_Premier_Legue.jpeg'

import song from './assets/Childish_Gambino_Iii_Telegraph_Ave_Oakland_By_Lloyd_Ringtone_(by Fringster.com).mp3'

const Interests = ({ fullpageApi }) => {


  return (
    <>
      <div className="arrowContainer">
        <button className="arrow up centerTop" onClick={() => fullpageApi.moveSectionUp()} />
      </div>
      <h1>Interests</h1>
      <div className="details">
        <div className="interests">
          <h3>Love Live Music</h3>
          <img src={music} alt={music} />
          <p>2020, the year we don’t speak of; Although I did actually experience some great online gigs that were streamed live. I love attending festivals and gigs around the world or wherever I can experience live music. Most recent festival: All Points East 2021, Upcoming Festival: Glastonbury 2022.</p>
          <br />
          <p>Favourite song: Telegraph Ave. (&quot;Oakland&quot; By Lloyd)</p>
          <ReactAudioPlayer
            src={song}
            autoPlay
            controls
          />
        </div>
        <div className="interests">
          <h3>Massive Foodie</h3>
          <img src={food} alt={food} />
          <p>But seriously, who doesn’t love food? I try to experience different cuisines available to me, not just eating out but attempting to make them myself at home. I’ve recently found a list of the best ethnic restaurants to eat at in London according to reddit, and making it my mission to complete this list.<a href="https://goo.gl/maps/LoCrAuDKF5ExNxr59">Fellow foodie?</a></p>
          <br/>
          <p>Cooking from: <a href="https://www.goodreads.com/en/book/show/50669534-ottolenghi-flavor">Ottolenghi Flavor: A Cookbook</a></p>
        </div>
        <div className="interests">
          <h3> Addicted to FPL</h3>
          <img src={fpl} alt={fpl} />
          <p>I’m a big arsenal fan, but I don’t let that cloud my judgement with FPL. playing FPL just makes the league so much fun, and any non-arsenal matches much more interesting when you know you have something riding on it. Ruins your weekend when your captain doesn’t get a goal (Kane I’m looking at you). My best finish was the 2020/1 season - 61,210 out of 8m+ (Top 0.01%).</p>
          <br/>
          <p><a href="https://fantasy.premierleague.com/entry/837349/event/1">How I&apos;m doing this season</a></p>
        </div>
      </div>

      <div className="arrowContainer">
        <button className="arrow down centerBottom" onClick={() => fullpageApi.moveSectionDown().moveSectionDown()} />
      </div>
    </>
  )
}

export default Interests