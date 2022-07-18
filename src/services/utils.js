const throwNotFoundError = (message) => {
  const err = new Error(message);
  err.name = 'NotFoundError';
  throw err;
};

const throwInvalidFields = (message = 'Invalid fields') => {
  const err = new Error(message);
  err.name = 'InvalidFields';
  throw err;
};

const throwSameEmail = (message = 'User already registered') => {
  const err = new Error(message);
  err.name = 'SameEmail';
  throw err;
};

const throwTokenError = (message) => {
  const err = new Error(message);
  err.name = 'TokenError';
  throw err;
};

module.exports = {
  throwNotFoundError,
  throwInvalidFields,
  throwSameEmail,
  throwTokenError,
};