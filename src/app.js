require('dotenv').config();

const express = require('express');
const routes = require('./api/routes');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Currency conversion service running on port ${port}`);
});