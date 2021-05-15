// Required files
const router = require("express").Router();
const cors = require("cors");

router.use(cors());

router.get("/", (req, res) => {
  res.send("The server is working.");
});

module.exports = router;
