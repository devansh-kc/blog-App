import React from "react";
import appwriteService from "../appWrite/Config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
function PostCard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-[300px] rounded-md hover:shadow-xl hover:duration-500 hover:ease-in-out hover:scale-125 ">
        <img
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-3 text-sm text-gray-600">{parse(content)}</p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
