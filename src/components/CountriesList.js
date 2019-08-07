import React from 'react';
import CountryLine from "../components/CountryLine.js"
import countries from "../countries.json";
import {NavLink} from "react-router-dom";
import "../stylesheets/CountriesList.css"

function CountriesList() {

  let allCountries = countries;

  let wikiCountries = allCountries.map((country) => {
    return (
      <div>
        <NavLink className="NavLink" to={`/details/${country.cca3}`}>
          <div className="CountryLineContainer">
            <CountryLine 
              id={country.cca3} 
              name={country.name.common}
              flag={country.flag.normalize()}
            />
          </div>
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

export default CountriesList;