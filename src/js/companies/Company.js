import React from 'react'

export const Company = ({companyPhoto, companyBulletPoints = [], languages, date=""}) => {
	return (
		<div className="col m12 job-row">
          <h2 className="left m2 job-image">
            <div className="l10">
              <img src={companyPhoto} className="img-responsive icon-image"/>
            </div>
            <div className="m2 center">
              <font size="3">{date}</font>
            </div>
          </h2>
          <ul className="light list-style-type m10">
              {companyBulletPoints.map(
					(companyBulletPoint, i) => 
                    <li>{companyBulletPoint}</li>
				)}
          </ul>
          <div className="overlay">
            <div className="text">{languages}</div>
          </div>
        </div>
	)
}