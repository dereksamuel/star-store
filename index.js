require("dotenv").config();
const express = require("express");
const cors = require("cors");

const routingApi = require("./router/index.js");
const { handleErrors, handleBoomError, logErrors } = require("./middlewares/errors.handler");

const app = express();
const PORT = process.env.PORT || 5000;
const whiteList = [
  "https://jw.org",
  "https://platzi.com",
  "http://localhost:8000"
];

const options = {
  origin: (origin, cb) => {
    if (whiteList.includes(origin) || !origin) {
      cb(null, true)
    } else {
      cb(new Error("Access no granted"))
    }
  }
}

app.use(cors(options));
app.use(express.json());

routingApi(app);

app.use(logErrors);
app.use(handleBoomError);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
