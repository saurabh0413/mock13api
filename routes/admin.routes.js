const express = require("express");
const {
  jobPostController,
  jobdeleteController,
  jobupdateController,
} = require("../controllers/admin.controller");
const adminRoute = express.Router();

adminRoute.post("/jobPost", jobPostController);
adminRoute.delete("/delete/:jobId", jobdeleteController);
adminRoute.patch("/edit/:jobId", jobupdateController);
module.exports = { adminRoute };
