import React from 'react'
import logo2 from "../assets/photos/logo2.png"
import logo3 from "../assets/photos/logo192.png"
import resume from "../assets/Resume.docx"

export const Header = ({title="No Title Provided", author= "No Author", pages=0, freeBookmark}) => {
	return (
		<nav className="dark-green lighten-1" role="navigation">
          <img src={logo3} className="nav-react brand-logo center"/>
          <img src={logo2} className="img-responsive" />
          <ul id="nav-mobile" className="nav-link">
            <li>
              <a target="_self" href={resume} download="Resume.docx">Resume</a>
            </li>
            <li>
              <a className="rsvp" href="mailto:dugankniesteadt@gmail.com">Contact</a>
            </li>
            <li>
              <a href="https://github.com/dkniesteadt/resume" >Git Repository</a>
            </li>
          </ul>
        </nav>
	)
}
