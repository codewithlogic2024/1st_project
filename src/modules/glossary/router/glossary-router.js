import CmsLayout from "../../../layouts/cms-layout";
import DefaultLayout from "../../../layouts/default-layout";
import CreateEditInfographic from "../pages/create-edit-glossary";
import ListingInfographic from "../pages/listing-glossary";


export const GlossaryRouter = [
  {
    path: "/glossary",
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