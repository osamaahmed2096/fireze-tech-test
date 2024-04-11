require('dotenv').config();
const axios = require('axios');

// Function to make a call to the exchange rate API using the body from the post request
// The result is then fetched from the API and returned
const getConversionRate = async (amount, from, to) => {
  const apiData = await axios
    .get(`${process.env.API_ENDPOINT}/${from}/${to}/${amount}`)
    .catch((err) => ({ status: 400, error: err.response.data['error-type']}));

  if (apiData.error) {
    return apiData;
  }

  return apiData['data']['conversion_result'].toFixed(2).toString();
}

module.exports = getConversionRate;