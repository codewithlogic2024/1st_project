import React, { useEffect, useMemo } from "react";
import { useBlogsList } from "../../../react-query/query-hooks/blogQuery.hooks";
import { useLocation } from "react-router-dom";
import Loader from "../../../components/loader";
import BlogListingCard from "../../../components/listing-cards/blog-listing-card";
import PostTypeNavBar from "../../../components/post-type-nav-bar";

const tabItems = [
  { name: "Create", route: "blogs/create" },
  { name: "Published", route: "blogs/published" },
  { name: "Draft", route: "blogs/draft" },
  { name: "Trash", route: "blogs/trash" },
];

const ListingBlog = () => {
  const { pathname } = useLocation();
  const pageTypeHandler = useMemo(() => {
    if (pathname?.includes("published")) {
      return 1;
    } else if (pathname?.includes("draft")) {
      return 2;
    } else {
      return 3;
    }
  }, [pathname]);

  const {
    data: blogListing,
    isLoading,
    refetch,
  } = useBlogsList(pageTypeHandler);
  useEffect(() => {
    refetch();
  }, [pathname]);
  console.log("blogListing", blogListing);
  return (
    <>
      <PostTypeNavBar tabItems={tabItems} />
      {!isLoading ? (
        blogListing?.length > 0 ? (
          blogListing?.map((items) => (
            <BlogListingCard
              keys={items?.id}
              items={items}
              type={pageTypeHandler}
            />
          ))
        ) : (
          <p>
            You have no{" "}
            {pageTypeHandler == 1
              ? "published"
              : pageTypeHandler == 2
              ? "draft"
              : "trash"}{" "}
            blog
          </p>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ListingBlog;
