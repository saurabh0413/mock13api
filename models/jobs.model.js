const { default: mongoose } = require("mongoose");

const jobPostSchema = mongoose.Schema({
  cName: { type: String, required: true },
  position: { type: String, required: true },
  contract: { type: String, required: true },
  location: { type: String, required: true },
  userId: { type: String, required: true },
});
const jobPostModel = mongoose.model("jobs", jobPostSchema);
module.exports = { jobPostModel };
