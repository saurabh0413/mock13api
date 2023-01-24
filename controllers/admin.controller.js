const { jobPostModel } = require("../models/jobs.model");

const jobPostController = async (req, res) => {
  const { cName, position, contract, location, userId } = req.body;
  const job = new jobPostModel({
    cName,
    position,
    contract,
    location,
    userId,
  });
  await job.save();
  res.send(job);
};



const jobdeleteController = async (req, res) => {
  const { jobId } = req.params;
  const deleteJob = await jobPostModel.findOneAndDelete({
    _id: jobId,
    userId: req.body.userId,
  });
  res.send(deleteJob);
};

const jobupdateController = async (req, res) => {
  const { jobId } = req.params;

  const patchJob = await jobPostModel.findOneAndUpdate(
    {
      _id: jobId,
      userId: req.body.userId,
    },
    { ...req.body }
  );
  res.send(patchJob);
};

module.exports = {
  jobPostController,
  jobPostController,
  jobdeleteController,
  jobupdateController
};
