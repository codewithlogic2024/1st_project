import React, { memo } from "react";
import { useUpdateBlogStatus } from "../../react-query/query-hooks/blogQuery.hooks";
import useNotiStack from "../../custom-hooks/useNotiStack";
import useRedirect from "../../custom-hooks/useRedirect";

const BlogListingCard = ({ items, type }) => {
  const { toastSuccess, toastError } = useNotiStack();
  const redirectTo = useRedirect();
  const {
    title,
    author_name,
    image,
    description,
    content,
    published_date,
    author_image,
    post_status,
    id,
  } = items ?? {};

  const { mutate: updateStatus } = useUpdateBlogStatus();
  const handleUpdateStatus = (status) => {
    const redirectedUrl =
      status == "1"
        ? "blogs/published"
        : status == "2"
        ? "blogs/draft"
        : status == "3"
        ? "blogs/trash"
        : `blogs/update/${id}`;
    if (!!status) {
      const payload = { blogId: id, postStatus: status };
      updateStatus(payload, {
        onSuccess: () => {
          toastSuccess("Blog updated successfully");
          redirectTo(redirectedUrl);
        },
        onError: () => {
          toastError("Something went wrong please try again later.");
        },
      });
    } else {
      redirectTo(redirectedUrl);
    }
  };
  return (
    <>
      <div
        className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10"
        data-aos="zoom-in"
      >
        <p className="text-start mb-2">Blog id : {id}</p>
        <div className="flex justify-start gap-4">
          {image && (
            <img
              class="grow rounded-lg max-w-sm max-h-44"
              src={`https://www.talesoffinance.com/images/${image}`}
              //   src={`data:image/png;base64,${image}`}
              alt=""
            />
          )}
          <div className="grow flex-col">
            {title && (
              <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
                {title}
              </h2>
            )}
            {description && (
              <div className="line-clamp-3">
                <p className="text-gray-500 text-lg text-left">{description}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4 mr-8 mt-2">
          {!(type == null) && (
            <span
              className="rounded-full bg-sky-500 p-2 hover:bg-sky-100 hover:fill-sky-500"
              onClick={() => handleUpdateStatus(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 72 72"
              >
                <path d="M38.406 22.234l11.36 11.36L28.784 54.576l-12.876 4.307c-1.725.577-3.367-1.065-2.791-2.79l4.307-12.876L38.406 22.234zM41.234 19.406l5.234-5.234c1.562-1.562 4.095-1.562 5.657 0l5.703 5.703c1.562 1.562 1.562 4.095 0 5.657l-5.234 5.234L41.234 19.406z"></path>
              </svg>
            </span>
          )}
          {!(type == 2) && (
            <span
              className="rounded-full bg-cyan-500 p-2 hover:bg-cyan-100 hover:fill-cyan-500"
              onClick={() => handleUpdateStatus(2)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 30 30"
              >
                <path d="M24.707,7.793l-5.5-5.5C19.019,2.105,18.765,2,18.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V8.5C25,8.235,24.895,7.981,24.707,7.793z M17,23h-7c-0.552,0-1-0.448-1-1s0.448-1,1-1h7c0.552,0,1,0.448,1,1S17.552,23,17,23z M20,19H10c-0.552,0-1-0.448-1-1s0.448-1,1-1h10c0.552,0,1,0.448,1,1S20.552,19,20,19z M20,15H10c-0.552,0-1-0.448-1-1s0.448-1,1-1 h10c0.552,0,1,0.448,1,1S20.552,15,20,15z M19,9c-0.552,0-1-0.448-1-1V3.904L23.096,9H19z"></path>
              </svg>
            </span>
          )}
          {!(type == 3) && (
            <span
              className="rounded-full bg-red-500 p-2 hover:bg-red-100 hover:fill-red-500"
              onClick={() => handleUpdateStatus(3)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 26 26"
              >
                <path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"></path>
              </svg>
            </span>
          )}
          {!(type == 1) && (
            <span
              className="rounded-full bg-green-500 p-2 hover:bg-green-100 hover:fill-green-500"
              onClick={() => handleUpdateStatus(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
              </svg>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(BlogListingCard);
