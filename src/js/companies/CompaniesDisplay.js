import React from 'react'
import {Company} from "./Company"

export const CompaniesDisplay = ({companies={}}) => {
    return(
      <div className="container job-languages-listing">
          <div className="section">
            <div className="row center">
              <div className="col s12 m12 l12 title-format">
                <h3>Resume</h3>
              </div>
            </div>
            <div className="row">
              {companies.map(
                (company, i) => 
                  <Company 
                    companyPhoto={company.image}
                    companyBulletPoints={company.list} 
                    languages={company.languages}
                    date={company.date}/>
              )}        
            </div>
          </div>
          <br />
          <br />
      </div>
    )
}
