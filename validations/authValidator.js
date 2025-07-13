const Joi = require("joi");

const validateLogin = Joi.object({
  phone: Joi.string()
    .empty()
    .regex(/^09\d{9}$/, "g")
    .trim()
    .required()
    .messages({
      "any.required": "شماره همراه الزامی است",
      "string.base": "شماره همراه باید یک رشته باشد",
      "string.empty": "شماره همراه الزامی است",
      "string.pattern.name": "شماره وارد شده صحیح نیست",
    }),
})
  .required()
  .messages({
    "any.required": "داده ای ارسال نشده است",
  });

module.exports = {
  validateLogin,
};
