const express = require('express');
const app     = express();

app.get('/countries', (req, res, next) => {
  const countries = require("../Client/countries.json")
  res.json(countries);
});

app.listen(3000);
