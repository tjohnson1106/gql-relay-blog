const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://thomas:thomas01@ds215822.mlab.com:15822/gql-api",
  {
    useMongoClient: true
  }
);

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
