import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import "../stylesheets/CountryDetail.css"

function CountryDetail (props) {
  
  const getCountry = (id) => {
    let found = countries.find(oneCountry => {
      return oneCountry.cca3 === id;
    })
    return found;
  };
  const { params } = props.match;
  const foundCountry = getCountry(params.id);
  
  const getBorders = (bordersIds) => {
    let borders = bordersIds.map((borderId) => {
      return <Link to={`/details/${borderId}`}>
              <li>{getCountry(borderId).name.common}</li>
            </Link>
    })
    return borders
  }

  return (
    <div className="CountryDetail">
      <h1>{foundCountry.name.common}</h1>
      <p>Capital: {foundCountry.capital}</p>
      <p>Area: {foundCountry.area} km2</p>
      <p>Borders: {getBorders(foundCountry.borders)}</p>
    </div>
  )
  
}

export default CountryDetail;