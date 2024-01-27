import CmsLayout from "../../../layouts/cms-layout";
import DefaultLayout from "../../../layouts/default-layout";
import CreateEditBlog from "../pages/create-edit-blog";
import ListingBlog from "../pages/listing-blog";


export const BlogRouter = [
  {
    path: "/blogs",
    element:<CmsLayout/>,
    children: [
      { path: "create", element: <CreateEditBlog /> },
      { path: "update/:id", element: <CreateEditBlog /> },
      { path: "published", element: <ListingBlog /> },
      { path: "draft", element: <ListingBlog /> },
      { path: "trash", element: <ListingBlog /> },
    ],
  },
];