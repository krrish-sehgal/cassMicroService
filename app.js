const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

const errorController = require("./Controllers/error");
const authRoutes = require("./routes/auth");

app.use(authRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
  console.log("Running on http://localhost:3000/login");
});
