module.exports.randomOtpCode = function () {
  const randomCode = Math.floor(Math.random() * 100000);
  const validationRandomCode = String(randomCode).padEnd(5, "8");
  return validationRandomCode;
};
