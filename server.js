const express = require("express");
const { authRouter } = require("./routers/authRouter");
require("dotenv").config({});

const app = express();
app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.use((err, req, res, next) => {
  res.status(500).send(err);
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log("server running on port", port);
});
