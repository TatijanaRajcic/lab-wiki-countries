import React from 'react';
import "../stylesheets/CountryLine.css";

function CountryLine(props) {
  return (
    <div className="CountryLine">
      <li>{props.flag.normalize()} {props.name}</li>
    </div>
  )
}

export default CountryLine;