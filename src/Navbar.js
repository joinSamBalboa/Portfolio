import React from 'react'

<a href="#About">About</a>

const Navbar = ({ fullpageApi }) => {


  return (
    <>
      <div className="navbar">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Project">Projects</a></li>
          {/* <li><a href="#Experience">Experience</a></li> */}
          <li><a href="#Contact">Contact</a></li>
          
        </ul>
      </div>
    </>
  )
}

export default Navbar