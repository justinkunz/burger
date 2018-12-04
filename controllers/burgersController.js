var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//home page redirect
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgers = {
      burgers: data
    };
    res.render("index", burgers);
  });
});

//update request (when user clicks on eat me button)
router.put("/api/burgers/:id", function(req, res) {

  var updateBurger = {
    values: {
      devoured: true
    },
    where: {
      id: req.params.id
    }
  }

  burger.update(updateBurger, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//request for new data (when user clicks on add burger button)
router.post("/api/burgers", function(req, res) {
  newBurgCols = ["burger_name", "devoured"]
  newBurgData = [req.body.burger_name, false]

  burger.create(newBurgCols, newBurgData, function(result) {
    res.json({ id: result.insertId });
  });
});



module.exports = router;
