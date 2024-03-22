import React from "react";
import Posts from "../Posts/Posts";
import "./PostList.css";

const PostList = ({ posts, itemInBasket, add }) => {
  if (posts.length === 0) {
    return <h1 className="bike_not_found">Bike not found</h1>;
  }
  return (
    <div className="bike_icons_container">
      {posts.map((post) => (
        <Posts
          itemInBasket={itemInBasket}
          add={add}
          key={post.id}
          post={post}
        ></Posts>
      ))}
    </div>
  );
};

export default PostList;
