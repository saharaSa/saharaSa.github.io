const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const LocationController = require("./api/controllers/LocationController");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const router = require("./api/routes/index")

require("./db/db");
const app = express();

const port = process.env.PORT || 3301;
app.use(cors({ origin: "*" }));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// API ENDPOINTS

app.use(router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;