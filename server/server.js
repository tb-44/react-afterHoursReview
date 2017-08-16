const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const cors = require('cors');

let app = express();
app.use(bodyParser.json());
app.use(cors());

let port = 3040;

//controller
app.get('/api/products', controller.getProducts);

app.listen(port, () => {
  console.log("Started server on port " + port);
})
