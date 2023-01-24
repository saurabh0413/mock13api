const { signupModel, loginModel } = require("../models/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const { jobPostModel } = require("../models/jobs.model");

mongoose.set("strictQuery", false);
const signupController = async (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      res.send("something went wrong, please try again later");
    } else {
      const user = new signupModel({
        name: name,
        email: email,
        password: hash,
      });
      await user.save();
      res.send(user);
    }
  });
};

const loginController = async (req, res) => {
  const data = req.body;
  const { email, password } = data;

  const result1 = await signupModel.findOne({ email });

  const hashed_pass = result1.password;

  bcrypt.compare(password, hashed_pass, function (err, result) {
    if (result) {
      const token = jwt.sign({ userId: result1._id }, "abcd1234");
      res.send({ msg: "login success", token: token });
    } else {
      res.send("Login Failed");
    }
  });
};

const getJobsListings = async (req, res) => {
  const jobs = await jobPostModel.find();
  res.send(jobs);
};

module.exports = { signupController, loginController, getJobsListings };
