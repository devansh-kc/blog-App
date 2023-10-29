import React, { useState, useEffect } from "react";
import appwriteService from "../appWrite/Config";
import { useNavigate } from "react-router-dom";
import { Container, PostCard } from "../Components";

function AllPost() {
  const [post, setPost] = useState([]);

  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPost(posts.documents);
    }
  });
  useEffect(() => {}, []);
  return (
    <div>
      <Container>
        <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
          {" "}
          {post.map((post) => {
            return (
              <div key={post.$id}>
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
