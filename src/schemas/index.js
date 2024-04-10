const Joi = require('joi');

// Joi schema used to validate that the data passed in the request body
const currencyConversionSchema = Joi.object({
  value: Joi.string().required(),
  to: Joi.string().required(),
  from: Joi.string().required(),
});

module.exports = currencyConversionSchema;