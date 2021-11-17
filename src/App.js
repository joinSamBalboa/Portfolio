import React from 'react'
import Fullpage from './Fullpage'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-212975831-2')
ReactGA.pageview(window.location.pathname + window.location.search)

function App() {
  return <Fullpage />
}

export default App
