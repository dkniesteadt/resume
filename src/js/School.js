import React from 'react'

export const School = () => {
    return (
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12 title-format">
              <h3 className="center">Education<br /></h3>
            </div>
          </div>
          <div className="row">
            <div className="col m2 center">
              <img style={{width: '120px'}} src="https://resume-web-dk.s3.us-east-2.amazonaws.com/georgefox.jpg" className="george-fox-logo center" />
            </div>
            <div className="col s10">
              <span>George Fox University</span>
              <span className="right"> 2010-2014</span>
              <br />
              <span>Computer Science, B.S.</span>
              <span className="right">Newberg, OR</span>
            </div>
          </div>
        </div>
    )
}
