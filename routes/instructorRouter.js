const express = require("express");
const router = express.Router();
const {InstructorController} = require("../controllers/");

router.post("/", InstructorController.createNewInstructor);
router.get("/", InstructorController.getAllInstructor);
router.get("/:id", InstructorController.getInstructorByID);
router.patch("/:id", InstructorController.updateInstructor);
router.delete("/:id", InstructorController.deleteInstructor);

module.exports = router;