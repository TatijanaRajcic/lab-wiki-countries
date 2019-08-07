import React from 'react';
import CountriesList from "../components/CountriesList.js";
import CountryDetail from "../components/CountryDetail.js";
import {Switch, Route} from "react-router-dom";
import "../stylesheets/Home.css"

function Home() {

  return (
    <div className="Home">
      <CountriesList />
      <Switch>
        <Route path="/details/:id" component={CountryDetail} />
      </Switch>
    </div>
  )
}

export default Home;