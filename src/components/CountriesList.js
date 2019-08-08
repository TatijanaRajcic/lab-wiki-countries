import React, {Component} from 'react';
import CountryLine from "../components/CountryLine.js"
import countries from "../countries.json";
import {NavLink} from "react-router-dom";
import "../stylesheets/CountriesList.css"

class CountriesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allCountries: countries
    }
  }

  render() {

    let wikiCountries = this.state.allCountries.map((country) => {
      return (
        <div>
          <NavLink className="NavLink" activeClassName="ActiveNavLink" to={`/details/${country.cca3}`} >
            <CountryLine 
              id={country.cca3} 
              name={country.name.common}
              flag={country.flag}
            />
          </NavLink>
        </div>
      )
    })
  
    return (
      <div class="CountriesList">
        <ul>
          {wikiCountries}
        </ul>
      </div>
    )
  }
  
}

export default CountriesList;