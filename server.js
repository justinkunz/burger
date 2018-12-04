var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

//express set up
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars set up
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//routes
var routes = require("./controllers/burgersController.js");

app.use(routes);


app.listen(PORT, function() {
  console.log("listening on: http://localhost:" + PORT);
});
