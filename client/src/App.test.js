import React from "react";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import enzyme, { mount } from "enzyme";

import App from "./App";
import { Post } from "./components/Post";

enzyme.configure({
  adapter: new Adapter()
});

////////////////////////////////////////////////////////////////
// Post Component expect should h3 ////////////////////////////
// ^wrapper where post props render as title /////////////////
// second test case should test internal ////////////////////
// state using isOpen variable and enyme's mount object ////
///////////////////////////////////////////////////////////

describe("Post Component", () => {
  it("should test Post title", () => {
    const post = {
      id: 1,
      title: "Post One",
      content: "Post One Content",
      author: "Post One Author"
    };

    const wrapper = mount(<Post post={post} />);
    const h3 = wrapper.find("h3");
    expect(h3.text()).toBe(post.title);
  });

  it("should test Post content Modal open", () => {
    const post = {
      id: 1,
      title: "Post One",
      content: "Post One Content",
      author: "Post One Author"
    };

    const wrapper = mount(<Post post={post} />);
    const isOpenPreClick = wrapper.state().isOpen;
    expect(isOpenPreClick).toBe(false);
    wrapper.simulate("click"); // should open modal
    const isOpenPostClick = wrapper.state().isOpen;
    expect(isOpenPostClick).toBe(true);
  });
});
