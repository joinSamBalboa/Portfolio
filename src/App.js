import React, { useEffect } from 'react'
import Fullpage from './Fullpage'
import ReactGA from 'react-ga'

function App() {

  useEffect(() => {
    ReactGA.initialize('UA-212975831-2')

    //to report page view
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  useEffect(() => {
    console.log(window.location.pathname)
  })

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return <Fullpage />
}

export default App
