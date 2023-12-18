const express = require("express");

const route = express.Router();

const {
  getCourse,
  postCourse,
  updateCourse,
  deleteCourse,
  getSpecificCourse,
} = require("../controller/courseControllers");

route.get("/", getCourse);

route.post("/", postCourse);

route.get("/:id", getSpecificCourse);

route.put("/:id", updateCourse);

route.delete("/:id", deleteCourse);

module.exports = route;
