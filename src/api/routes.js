const router = require('express').Router();
const currencyCodes = require('../config/currencies');
const getConversionRate = require('../services/exchange-rate').getConversionRate;
const getSupportedCurrencies = require('../services/exchange-rate').getSupportedCurrencies;
const errors = require('../config/errors');
const validationMiddleware = require('../middleware/middleware');

// Endpoint to retrieve a list of valid currency codes
router.get('/currency-codes', async (_, res) => {
  const currencies = await getSupportedCurrencies();

  if (currencies.error) {
    res.status(currencies.status).send(currencies.error);

    return;
  }

  res.status(200).json(currencies);
});

// Endpoint which retrieves values from the body, validates those values using Joi schema
// then makes a call to the conversion rate function in the exchange rate service
router.post('/conversion-rate', validationMiddleware, async (req, res) => {
  const { amount, from, to } = req.body;

  const conversionRate = await getConversionRate(amount, from, to);

  if (conversionRate.error) {
    res.status(conversionRate.status).send(errors[conversionRate.error]);

    return;
  }

  res.status(200).send(conversionRate);
});

module.exports = router;