import { useNavigate } from "react-router-dom";

const useRedirect = () => {
  const navigate = useNavigate();
  const convertToSlug = (Text) => {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };
  const redirectTo = (pathName = "", state = null) =>
    navigate(`/${pathName}`, { state: state || {} });

  return redirectTo;
};

export default useRedirect;