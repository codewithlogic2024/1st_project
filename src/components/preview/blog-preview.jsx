import React from "react";
import parse from "html-react-parser";

const BlogPreview = ({ renderData, featuredImg, fromApi, content }) => {
  const { title, authorName, description } = renderData ?? {};
  return (
    <>
      <div className="mx-0 md:mx-40">
        <div className="p-2 md:p-8">
          <img
            src={
              typeof featuredImg == "string"
                ? `https://www.talesoffinance.com/images/${featuredImg}`
                : URL.createObjectURL(featuredImg)
            }
            className="rounded-lg object-cover mb-5"
          />
          <div className="flex justify-start gap-2 items-center align-center mb-5">
            <img
              src="https://drive.google.com/uc?export=view&id=1CIQgjiF6xXdwXrUcqMW-n6o5vvVQAZI5"
              className="w-10 h-10 rounded-full"
            />
            <p className="text-lg font-bold">{authorName}</p>
            {/* <span>{published_date}</span> */}
          </div>
          <h1 className="text-left text-3xl md:text-5xl font-semibold mb-5">
            {title}
          </h1>
          <div className="blogDetails">{parse(`${content}`)}</div>
        </div>
      </div>
    </>
  );
};

export default BlogPreview;
