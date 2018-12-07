import React from "react";
import { storiesOf } from "@storybook/react";

import { Post } from "../src/components/Post";

storiesOf("Post", module)
  .add("with post one", () => (
    <Post
      post={{
        title: "Post One",
        content: "Post One Content",
        author: "Post One Author"
      }}
    />
  ))
  .add("with post two", () => (
    <Post
      post={{
        title: "Update Test: Post Two",
        content: "Post Two Content",
        author: "Post Two Author"
      }}
    />
  ));
