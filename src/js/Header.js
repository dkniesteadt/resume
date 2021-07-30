import React from 'react'

export const Header = ({title="No Title Provided", author= "No Author", pages=0, freeBookmark}) => {
	return (
		<nav className="dark-green lighten-1" role="navigation">
          <img src="https://resume-web-dk.s3.us-east-2.amazonaws.com/logo192.png" className="nav-react brand-logo center"/>
          <img src="https://resume-web-dk.s3.us-east-2.amazonaws.com/logo2.png" className="img-responsive" />
          <ul id="nav-mobile" className="nav-link">
            <li>
              <a href="https://resume-web-dk.s3.us-east-2.amazonaws.com/Dugan+Kniesteadt's+Resume+2021.docx" download="Resume.docx">Resume</a>
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
