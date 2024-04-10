// Error object which maps the errors returned from the API to more user friendly errors
const errors = {
  'unsupported-code': 'Invalid currency code provided',
  'malformed-request': 'Request format is invalid',
  'invalid-key': 'API key is invalid',
  'inactive-account': 'Email address attached to api key is not activated',
  'quota-reached': 'Max number of requests reached'
};

module.exports = errors;