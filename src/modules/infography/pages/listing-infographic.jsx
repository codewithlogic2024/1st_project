import React, { useEffect, useMemo } from "react";
import PostTypeNavBar from "../../../components/post-type-nav-bar";
import InfographicListingCard from "../../../components/listing-cards/infographic-listing-card";
import { useLocation } from "react-router-dom";
import { useInfographicList } from "../../../react-query/query-hooks/infographicQuery.hooks";
import Loader from "../../../components/loader";

const tabItems = [
  { name: "Create", route: "infographic/create" },
  { name: "Published", route: "infographic/published" },
  { name: "Draft", route: "infographic/draft" },
  { name: "Trash", route: "infographic/trash" },
];

const ListingInfographic = () => {
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
    data: infographicListing,
    isLoading,
    refetch,
  } = useInfographicList(pageTypeHandler);
  useEffect(() => {
    refetch();
  }, [pathname]);
  return (
    <>
      <PostTypeNavBar tabItems={tabItems} />

      {!isLoading ? (
        infographicListing?.length > 0 ? (
          infographicListing?.map((items) => (
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto p-8 m-10 ">
              <InfographicListingCard
                keys={items?.id}
                items={items}
                type={pageTypeHandler}
              />
            </div>
          ))
        ) : (
          <p>
            You have no{" "}
            {pageTypeHandler == 1
              ? "published"
              : pageTypeHandler == 2
              ? "draft"
              : "trash"}{" "}
            infographic
          </p>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ListingInfographic;
