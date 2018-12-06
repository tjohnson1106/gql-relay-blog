const mongoose = require("mongoose");

const db = require("../../config/key").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log("mongodb error", err, "mongodb error"));

const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: String,
  content: String,
  userId: String
});

const UserModel = require("./UserModel");
const { fromGlobalId } = require("graphql-relay");

var PostModel = mongoose.model("Post", postSchema);

module.exports = {
  // pass order parameter to getPosts
  getPosts: order => {
    // if order is descending paginate other wise current
    return PostModel.find().sort({ _id: order == "DESC" ? -1 : 1 });
  },
  getPost: () => {
    return PostModel.findOne({ _id: id });
  },
  createPost: post => {
    return PostModel(post).save();
  },
  getPostAuthor: async postId => {
    const post = await module.exports.getPost(postId);
    const { type, id } = fromGlobalId(post.userId);
    if (type === "User") {
      return UserModel.getUser(id);
    } else {
      return null;
    }
  }
};
