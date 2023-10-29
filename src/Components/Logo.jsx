import React from "react";
import blog from "../assets/blogging.png";
function Logo(width = "") {
  return (
    <div>
      <img src={blog} alt="blog" className="w-24 " />
    </div>
  );
}

export default Logo;
