import { useMutation, useQuery } from "react-query";
import { endpoints } from "../../api/api-end-points";
import axiosInstance from "../../api/axios-instance";
import { INFOGRAPHIC_DETAILS, INFOGRAPHIC_LIST } from "../query-keys/infographicQuery.keys";
import axios from "axios";

//   <------------------ADD INFOGRAPHIC ------------------->
const addInfographicsPost = async (body) => {
  const res = await axiosInstance.post(
    endpoints.infographic.createInfographic,
    body,
    {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
      },
    }
  );
  return res;
};
export const useAddInfographics = () => useMutation(addInfographicsPost);

//   <------------------ INFOGRAPHIC LIST ------------------->
const getInfographicList = async (status) => {
  const res = await axiosInstance.get(
    `${endpoints.infographic.infographicsList}${
      status ? `?status=${status}` : ""
    }`
  );
  return res;
};

export const useInfographicList = (
  status,
  enabled = false,
  onSuccess = () => {},
  onError = () => {}
) =>
  useQuery([INFOGRAPHIC_LIST, status], () => getInfographicList(status), {
    onSuccess,
    onError,
    enabled,
    select: (data) => data?.data?.infographics ?? [],
  });

//   <------------------UPDATE BLOG STATUS ------------------->
const updateInstagramStatus = async (body) => {
  const res = await axiosInstance.post(
    endpoints.infographic.updateStatus,
    body
  );
  return res;
};
export const useUpdateInstagramStatus = () =>
  useMutation(updateInstagramStatus);

//   <------------------ INFOGRAPHIC DETAILS ------------------->
const getInfographicDetails = async (id) => {
  const res = await axiosInstance.get(
    `${endpoints.infographic.infographicsDetails}${id ? `/${id}` : ""}`
  );
  return res;
};

export const useInfographicDetails = (
  id,
  enabled = false,
  onSuccess = () => {},
  onError = () => {}
) =>
  useQuery([INFOGRAPHIC_DETAILS, id], () => getInfographicDetails(id), {
    onSuccess,
    onError,
    enabled: false,
    select: (data) => data?.data?.infographic ?? [],
  });


//   <------------------UPDATE INFOGRAPHIC ------------------->
const updateInfographicPost = async (body) => {
    const res = await axios.post('https://www.talesoffinance.com/api/update-infographic', body, {
      headers: {
        "Content-Type": "multipart/form-data", // Set content type to multipart/form-data
      },
    });
    return res;
  };
  export const useUpdateInfographic = () => useMutation(updateInfographicPost);