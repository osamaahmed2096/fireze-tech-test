require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./api/routes');

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());

// Need these cors options to only accept requests from localhost:3000
// which the FE React app would be running on
const corsOptions = {
  origin: 'http://localhost:3000'
};

app.use(cors(corsOptions));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Currency conversion service running on port ${port}`);
});