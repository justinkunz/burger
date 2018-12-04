
//functions that call query functions
var orm = require("../config/orm.js");
var burger = {
  
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  update: function(obj, cb) {
    orm.update("burgers", obj, function(res) {
      cb(res);
    });
  },
  create: function(col, val, cb) {
    orm.create("burgers", col, val, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
