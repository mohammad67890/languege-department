const express = require("express");
const {
  loginController,
  verifyController,
} = require("../controllers/authController");
const { loginValidator } = require("../middlewares/authRouter/authValidators");

const authRouter = express.Router();

authRouter.route("/login").post(loginValidator, loginController);
authRouter.route("/verify").post(verifyController);

module.exports.authRouter = authRouter;
