const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/courses", require("./routes/courseRoutes"));

app.listen(8000, () => {
  console.log(`server running on ${8000}`);
});
