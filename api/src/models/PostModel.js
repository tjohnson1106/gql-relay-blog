const mongoose = require("mongoose");

const db = require("../../config/key").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log("mongodb error", err, "mongodb error"));

const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: String,
  content: String
});

var PostModel = mongoose.model("Post", postSchema);

module.exports = {
  getPosts: () => {
    return PostModel.find();
  },
  getPost: () => {
    return PostModel.findOne({ _id: id });
  },
  createPost: post => {
    return PostModel(post).save();
  }
};
