const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const mongodb = require("./config/db");

const app = express();

app.use(express.json());

mongodb()

app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(8000, () => {
  console.log(`server running on ${8000}`);
});
