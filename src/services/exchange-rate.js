require('dotenv').config();
const axios = require('axios');

// Function to make a call to the exchange rate API using the body from the post request
// The rate is retrieved from the data and then the final value is calculated and returned
const getConversionRate = async (value, from, to) => {
  const apiData = await axios
    .get(`${process.env.API_ENDPOINT}/${from}`)
    .catch((err) => ({ status: 400, error: err.response.data['error-type']}));

  if (apiData.error) {
    return apiData;
  }
  
  const toRate = apiData['data']['conversion_rates'][to];

  return (value * toRate).toString();
}

module.exports = getConversionRate;