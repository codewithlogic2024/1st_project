import React, { useEffect, useMemo, useState } from "react";
import PostTypeNavBar from "../../../components/post-type-nav-bar";
import GlossaryListingCard from "../../../components/listing-cards/glossary-listing-card";
import { useLocation } from "react-router-dom";
import {
  useGlossaryLetterTypeList,
  useGlossaryList,
} from "../../../react-query/query-hooks/glossaryQuery.hook";

const tabItems = [
  { name: "Create", route: "glossary/create" },
  { name: "Published", route: "glossary/published" },
  { name: "Draft", route: "glossary/draft" },
  { name: "Trash", route: "glossary/trash" },
];

const ListingGlossary = () => {
  const { pathname } = useLocation();
  const [selectedTab, setSelectedTab] = useState("");

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
    data: glossaryLettersTypes,
    isLoading: letterTypeLoader,
    refetch,
  } = useGlossaryLetterTypeList(false, (response) => {
    if (!!response && response?.types && response?.types?.length > 0) {
      setSelectedTab(response?.types[0]);
    }
  });
  const { data: glossaryList, isLoading: glossaryListLoader } = useGlossaryList(
    pageTypeHandler,
    selectedTab,
    !!pageTypeHandler && !!selectedTab
  );

  const tabHandler = (tab) => setSelectedTab(tab);
  // const dragToTheElemnt = () => {
  //   var scrollDiv = document.getElementById(
  //     `${selectedTab}_${_letter}`
  //   )?.offsetTop;
  //     window.scrollTo({
  //       top: scrollDiv - 200,
  //       behavior: "smooth",
  //     });
  // };

  useEffect(() => {
    refetch();
  }, []);
  console.log("glossaryLettersTypes", glossaryLettersTypes);
  return (
    <>
      <PostTypeNavBar tabItems={tabItems} />

      {!!glossaryLettersTypes &&
        Object.keys(glossaryLettersTypes).length > 0 && (
          <>
            <ul class="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-8">
              {glossaryLettersTypes?.types?.map((_type) => (
                <li class="me-2" onClick={() => tabHandler(_type)}>
                  <a
                    class={`${
                      selectedTab == _type
                        ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
                        : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-white"
                    }`}
                  >
                    {_type}
                  </a>
                </li>
              ))}
            </ul>
            <ul class="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-4">
              {glossaryLettersTypes?.letters?.map((_letter) => (
                <li
                  class="me-2 mb-2"
                  onClick={() => {
                    if (
                      !!document.getElementById(`${selectedTab}_${_letter}`)
                    ) {
                      var scrollDiv = document.getElementById(
                        `${selectedTab}_${_letter}`
                      )?.offsetTop;
                      if (!!scrollDiv) {
                        window.scrollTo({
                          top: scrollDiv - 200,
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                >
                  <a class="inline-block px-4 py-3 text-black bg-green-50 rounded-lg hover:bg-green-600 hover:text-white">
                    {_letter}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

      {!!glossaryList && glossaryList?.length > 0 ? (
        <div className="container grid grid-cols-1 md:grid-cols-1 gap-4 mx-auto p-2">
          {glossaryList?.map((_item, index) => (
            <div
              data-aos="zoom-in"
              id={`${selectedTab}_${_item?.letter}`}
              className="bg-slate-200 p-4 rounded"
            >
              <h2 className="text-3xl font-semibold text-gray-900 text-start line-clamp-2 mb-2">
                #{_item?.letter}
              </h2>
              {_item?.data?.map((_i) => (
                <GlossaryListingCard
                  keys={_i?.id}
                  items={_i}
                  type={pageTypeHandler}
                />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p>There is no glossary</p>
      )}
    </>
  );
};

export default ListingGlossary;
