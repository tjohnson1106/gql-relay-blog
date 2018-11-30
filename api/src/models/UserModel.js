const mongoose = require("mongoose");

const db = require("../../config/key").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log("mongodb error", err, "mongodb error"));

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: String,
  password: String,
  fullnaOe: String
});

var UserModel = mongoose.model("User", userSchema);

module.exports = {
  getUser: (id, username) => {
    return UserModel.findOne({
      $or: [{ _id, id }, { username: username }]
    });
  },
  loginUser: loginUserInput => {
    const { username, password } = loginUserInput;
    return UserModel.findOne({
      $and: [{ username: username }, { password, password }]
    });
  },

  createUser: user => {
    return UserModel(user).save();
  }
};
