const Courses = require("../model/courseSchema");
const express = require("express");
const app = express();
app.use(express.json());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

const getCourse = async (req, res) => {
  const course = await Courses.find( );
  res.send(course);
};

const postCourse = async (req, res) => {
  const { name, description, price, duration, level, topics, schedule } =
    req.body;


  const course = await Courses.create({
    name,
    description,
    price,
    duration,
    level,
    topics,
    schedule,
    user_id: req.user.id,
  });

  res.send(course);
};

const getSpecificCourse = async (req, res) => {
  const course = await Courses.findById(req.params.id);
  if (!course) {
    res.status(404).send("'not  found..sorry..");
    throw new Error("'not  found..sorry..");
  }

  res.send(course);
};

const updateCourse = async (req, res) => {
  const course = await Courses.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("'not  found..sorry..");
  }

  const updatedCourse = await Courses.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.send(updatedCourse);
};

const deleteCourse = async (req, res) => {
  const course = await Courses.findById(req.params.id);
  if (!course) {
    res.status(404);
    throw new Error("'not  found..sorry..");
  }

  await Courses.deleteOne();
  res.status(204).send(course);
};

module.exports = {
  getCourse,
  postCourse,
  updateCourse,
  deleteCourse,
  getSpecificCourse,
};
