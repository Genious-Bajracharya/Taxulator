var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/users", function (req, res, next) {
  const user = req.body;

  res.status(200).json({});
});

module.exports = router;
