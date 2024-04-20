import React from "react";
import appwriteService from "../appWrite/Config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
function PostCard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="border">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="min-h-min p-3">
          <p className="mt-4 flex-1 text-base font-semibold text-gray-900">
            {title}
          </p>
          <p className="mt-4 w-full text-sm leading-normal text-gray-600">
            {parse(content)}
          </p>
          {/* <div className="mt-4 flex space-x-3 ">
            <img
              className="h-full w-10 rounded-lg"
              src={post.avatar}
              alt={postauthor}
            />
            <div>
              <p className="text-sm font-semibold leading-tight text-gray-900">
                {post.author}
              </p>
              <p className="text-sm leading-tight text-gray-600">{post.date}</p>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
