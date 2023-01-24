const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// const connection = mongoose.connect(
//   "mongodb+srv://saurabh:saurabh1234@cluster0.w0azhgz.mongodb.net/user"
// );
const connection = mongoose.connect(
  "mongodb+srv://saurabh:saurabh@cluster0.lsqs7hc.mongodb.net/Jobsapp"
);
module.exports = { connection };
