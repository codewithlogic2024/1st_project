import { useMutation, useQuery } from "react-query";
import axiosInstance from "../../api/axios-instance";
import { endpoints } from "../../api/api-end-points";
import { GLOSSARY_DETAILS, GLOSSARY_LRTTERS_TYPE_LIST } from "../query-keys/glossaryQuery.keys";

//   <------------------ CREATE GLOSSARY ------------------->

const addGlossaryPost = async (body) => {
  const res = await axiosInstance.post(endpoints.glossary.createGlossary, body);
  return res;
};
export const useAddGlossary = () => useMutation(addGlossaryPost);

//   <------------------ GLOSSARY LETTERS AND TYPE LIST ------------------->
const getGlossaryLetterTypeList = async () => {
  const res = await axiosInstance.get(endpoints.glossary.getLettersAndType);
  return res;
};

export const useGlossaryLetterTypeList = (
  enabled = false,
  onSuccess = () => {},
  onError = () => {}
) =>
  useQuery([GLOSSARY_LRTTERS_TYPE_LIST], getGlossaryLetterTypeList, {
    onSuccess,
    onError,
    enabled,
    select: (data) => data?.data ?? {},
  });
//   <------------------ GLOSSARY LIST ------------------->
const getGlossaryList = async (status, type) => {
  const res = await axiosInstance.get(
    `${endpoints.glossary.glossaryList}/${status}/${type}`
  );
  return res;
};

export const useGlossaryList = (
  status,
  type,
  enabled = false,
  onSuccess = () => {},
  onError = () => {}
) =>
  useQuery(
    [GLOSSARY_LRTTERS_TYPE_LIST, status, type],
    () => getGlossaryList(status, type),
    {
      onSuccess,
      onError,
      enabled,
      select: (data) => data?.data ?? [],
    }
  );

  //   <------------------ CHANGE GLOSSARY STATUS------------------->

const changeGlossaryStatus = async (body) => {
  const res = await axiosInstance.post(endpoints.glossary.updateStatus, body);
  return res;
};
export const useChangeGlossaryStatus = () => useMutation(changeGlossaryStatus);

  //   <------------------ UPDATE GLOSSARY ------------------->

const updateGlossary = async (body) => {
  const res = await axiosInstance.post(endpoints.glossary.updateGlossary, body);
  return res;
};
export const useUpdateGlossary = () => useMutation(updateGlossary);

//   <------------------ INFOGRAPHIC DETAILS ------------------->
const getGlossaryDetails = async (id) => {
  const res = await axiosInstance.get(
    `${endpoints.glossary.glossaryDetails}${id ? `/${id}` : ""}`
  );
  return res;
};

export const useGlossaryDetails = (
  id,
  enabled = false,
  onSuccess = () => {},
  onError = () => {}
) =>
  useQuery([GLOSSARY_DETAILS, id], () => getGlossaryDetails(id), {
    onSuccess,
    onError,
    enabled: false,
    select: (data) => data?.data?.glossary ?? {},
  });