const Joi = require("joi");

const validateLogin = Joi.object({
  phone: Joi.string()
    .empty()
    .regex(/^09\d{9}$/, "g")
    .trim()
    .required()
    .messages({
      "any.required": "شماره همراه الزامی است",
      "string.base": "نام کاربری باید یک رشته باشد",
      "string.empty": "نام کاربری الزامی است",
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
