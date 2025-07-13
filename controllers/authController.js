const { randomOtpCode } = require("../utils/utils");

module.exports.loginController = (req, res) => {
  const phone = req.body?.phone;
  res.status(200).send({ phone: phone, OTPCode: randomOtpCode() });
};

module.exports.verifyController = (req, res) => {};
