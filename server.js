const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = 3000;
const fetch = require("node-fetch");

app.use(cors());
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Proxy listening on port ${port}`);
});

app.get('/restaurants', (req,res) => {
  fetch('http://52.72.117.110:3003/restaurantReviews/Saigon', {
    method: 'GET'
  })
  .then(() => {
    console.log('success');
    res.end();
  })
  .catch(() => {
    throw err;
  })
})
