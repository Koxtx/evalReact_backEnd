require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 4000;
const userRoutes = require("./routes/users");
const videoRoutes = require("./routes/videos");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to db & listening on port : ${port}`);
    });
  })
  .catch((err) => console.log(err));
