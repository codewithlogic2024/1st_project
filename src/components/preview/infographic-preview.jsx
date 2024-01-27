import React from "react";

const InfographicPreview = ({ renderData, featuredImg }) => {
  const { title, authorName, description, content } = renderData ?? {};
  return (
    <>
      <div class="text-center m-2 md:m-20 rounded-md">
        <div class="h-min overflow-hidden rounded-md">
          {!!featuredImg && (
            <img
              className="h-full w-full object-cover object-center"
              // class="hover:scale-125 transition-all duration-500 cursor-pointer"
              src={
                typeof featuredImg == "string"
                  ? `https://www.talesoffinance.com/infographics/${featuredImg}`
                  : URL.createObjectURL(featuredImg)
              }
              alt=""
            />
          )}
        </div>
        <h3 class="text-3xl py-4">{title}</h3>
        <span class="text-lg text-gray-700">{description}</span>
      </div>
    </>
  );
};

export default InfographicPreview;
