const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
const { userRoute } = require("./routes/user.routes");
const { authentication } = require("./middlewares/authentication");
const { adminRoute } = require("./routes/admin.routes");
const { getJobsListings } = require("./controllers/user.controller");
const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.use("/user", userRoute);
app.get("/jobs",getJobsListings)
app.use(authentication);
app.use("/admin", adminRoute);
app.listen(8787, async () => {
  try {
    await connection;
    console.log("connection established");
  } catch (err) {
    console.log(err);
  }
  console.log("server started on port 8787");
});
