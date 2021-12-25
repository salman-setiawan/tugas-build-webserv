const express = require("express");
const router = express.Router();
const instructorRoute = require("./instructorRouter");
const courseRoute = require("./courseRouter");
const participantRoute = require("./participantRouter");

router.get("/", (req, res) => {
  const ready = `<h3> Welcome to Online Course Website API</h3>`;
  res.status(200).send(ready);
});

router.use("/instructors", instructorRoute);
router.use("/courses", courseRoute);
router.use("/participants", participantRoute);

module.exports = router;