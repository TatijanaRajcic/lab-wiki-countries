import React, {Component} from 'react';
import CountryLine from "../components/CountryLine.js"
import countries from "../countries.json";
import {NavLink} from "react-router-dom";
import "../stylesheets/CountriesList.css";
import axios from 'axios';

class CountriesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allCountries: countries
    }
  }

  // set up to use external API
  componentDidMount() {
    axios.get("http://localhost:3000/countries")
    .then(response => {
        this.setState({allCountries: response.data})
    })
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