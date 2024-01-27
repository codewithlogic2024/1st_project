import axios from "axios";
import { useMutation } from "react-query";

const userLogin = async (body) => {
  const res = await axios.post(
    "https://www.talesoffinance.com/api/login",
    body
  );
  return res;
};

export const useUserLogin = () => useMutation(userLogin);