const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Proxy listening on port ${port}`);
});

app.get('/', (req,res) => {
  fetch('http://52.72.117.110:3003/restaurantReviews/Saigon', {
    method: 'GET'
  })
  .then(() => {
    res.end();
  })
})
