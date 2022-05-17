var express = require("express");
const { Db } = require("mongodb");
var router = express.Router();
var moment = require("moment"); // require
moment().format();



module.exports = function (db) {
  /* GET home page. */
  const collection = db.collection("data");

  router.get("/",async function (req, res, next) {
    
    const findResult = await collection.find({}).toArray();
    res.render('list', {data : findResult})
  });

  return router;
};
