import React from 'react'
import "./materialize/css/materialize.css"
import  "./starter-template.css"
import {Header} from "./js/Header"
import {CompaniesDisplay} from "./js/companies/CompaniesDisplay"
import Companies from "./js/companies/CompaniesData"
import {Intro} from "./js/Intro"
import { School } from './js/School';

function App() {
  return (
    <div>
        <Header/>
        <Intro/>
        <CompaniesDisplay companies = {Companies}/>
        <School/>

        <footer className="page-footer dark-green"> 
          <div className="container">
            © 2019 Dugan Kniesteadt
          </div>             
        </footer>
      </div>
  );
}

export default App;
