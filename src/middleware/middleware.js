const schema = require('../schemas');

// Middleware used to check that the values passed to the request body are valid
const middleware = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (!error) {
    next();
  } else {
    const { details } = error;

    const message = details.map(i => i.message).join(',');
    
    res.status(422).json({ error: message });
  }
};

module.exports = middleware;