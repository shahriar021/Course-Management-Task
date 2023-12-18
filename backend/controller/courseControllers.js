const getCourse = (req, res) => {
  res.send("hey, here's your courses..");
};

const postCourse = (req, res) => {
    console.log(req.body)
  res.send("“The course has been added successfully");
};

const getSpecificCourse = (req, res) => {
  res.send("here is your specific course..");
};

const updateCourse = (req, res) => {
  res.send("“The course has been updated successfully");
};

const deleteCourse = (req, res) => {
  res.send("“The course has been deleted successfully");
};

module.exports = {
  getCourse,
  postCourse,
  updateCourse,
  deleteCourse,
  getSpecificCourse,
};
