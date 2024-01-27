import DefaultLayout from "../../../layouts/default-layout";
import CmsLogin from "../pages/cms-login";


export const LoginRouter = [
  {
    path: "/",
    element:<DefaultLayout/>,
    children: [
      { path: "/", element: <CmsLogin /> },
    ],
  },
];