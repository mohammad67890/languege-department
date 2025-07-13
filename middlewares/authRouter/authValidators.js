const { validateLogin } = require("../../validations/authValidator");

module.exports.loginValidator = (req, res, next) => {
  const validatePhone = validateLogin.validate(req.body, {
    convert: false,
    presence: true,
  });

  validatePhone?.error
    ? res.status(409).send(validatePhone?.error?.message)
    : next();
};
