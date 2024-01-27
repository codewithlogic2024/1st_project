import { useMutation, useQuery } from "react-query";
import { BLOGS_DETAILS, BLOGS_LIST } from "../query-keys/blogQuery.keys";
import axiosInstance from "../../api/axios-instance";
import { endpoints } from "../../api/api-end-points";
import axios from "axios";

//   <------------------ BLOG LIST ------------------->
const getBlogsList = async (status) => {
  const res = await axiosInstance.get(
    `${endpoints.blog.blogsList}${status ? `?status=${status}` : ""}`
  );
  return res;
};

export const useBlogsList = (
  status,
  enabled = false,
  onSuccess = () => {},
  onError = () => {}
) =>
  useQuery([BLOGS_LIST, status], () => getBlogsList(status), {
    onSuccess,
    onError,
    enabled,
    select: (data) => data?.data?.blogs ?? [],
  });

//   <------------------ BLOG DETAILS ------------------->
const getBlogsDetails = async (id) => {
  const res = await axiosInstance.get(
    `${endpoints.blog.blogsDetails}${id ? `/${id}` : ""}`
  );
  return res;
};

export const useBlogsDetails = (
  id,
  enabled = false,
  onSuccess = () => {},
  onError = () => {}
) =>
  useQuery([BLOGS_DETAILS, id], () => getBlogsDetails(id), {
    onSuccess,
    onError,
    enabled: false,
    select: (data) => data?.data?.blog ?? [],
  });

//   <------------------ADD BLOG ------------------->
const addBlogPost = async (body) => {
  const res = await axios.post(
    "https://www.talesoffinance.com/api/create-blog",
    body,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
      },
    }
  );
  return res;
};
export const useAddBlog = () => useMutation(addBlogPost);

//   <------------------UPDATE BLOG ------------------->
const updateBlogPost = async (body) => {
  const res = await axios.post(
    "https://www.talesoffinance.com/api/update-blog",
    body,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
      },
    }
  );
  return res;
};
export const useUpdateBlog = () => useMutation(updateBlogPost);

// //   <------------------DELETE BLOG ------------------->
// const DeleteBlogPost = async (body) => {
//     const { id, payload } = body ?? {};
//     const res = await axios.delete(
//       `https://www.talesoffinance.com/api/delete_blog${id ? `/${id}` : ""}`,
//       payload
//     );
//     return res;
//   };
//   export const useDeleteBlog = () => useMutation(DeleteBlogPost);

// //   <------------------UPDATE BLOG STATUS ------------------->
const updateBlogStatus = async (body) => {
  const res = await axiosInstance.post(endpoints.blog.updateStatus, body);
  return res;
};
export const useUpdateBlogStatus = () => useMutation(updateBlogStatus);
