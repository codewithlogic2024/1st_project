import CmsLayout from "../../../layouts/cms-layout";
import TalesOfStartUps from "../pages/create-edit-tos";
import ListingTos from "../pages/listing-tos";

export const TosRouter = [
  {
    path: "/tales-of-startups",
    element: <CmsLayout />,
    children: [
      { path: "create", element: <TalesOfStartUps /> },
      { path: "update/:id", element: <TalesOfStartUps /> },
      { path: "published", element: <ListingTos /> },
      { path: "draft", element: <ListingTos /> },
      { path: "trash", element: <ListingTos /> },
    ],
  },
];
