const express = require("express");
const router = express.Router();
const { CourseController } = require("../controllers/");

router.post("/", CourseController.createNewCourse);
router.get("/", CourseController.getAllCourse);
router.get("/:id", CourseController.getCourseByID);
router.patch("/:id", CourseController.updateCourse);
router.delete("/:id", CourseController.deleteCourse);

module.exports = router;