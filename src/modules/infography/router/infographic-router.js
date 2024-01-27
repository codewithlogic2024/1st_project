import CmsLayout from "../../../layouts/cms-layout";
import DefaultLayout from "../../../layouts/default-layout";
import CreateEditInfographic from "../pages/create-edit-infographic";
import ListingInfographic from "../pages/listing-infographic";


export const InfographicRouter = [
  {
    path: "/infographic",
    element:<CmsLayout/>,
    children: [
      { path: "create", element: <CreateEditInfographic /> },
      { path: "update/:id", element: <CreateEditInfographic /> },
      { path: "published", element: <ListingInfographic /> },
      { path: "draft", element: <ListingInfographic /> },
      { path: "trash", element: <ListingInfographic /> },
    ],
  },
];