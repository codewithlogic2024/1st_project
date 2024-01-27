import React, { useEffect, useState } from "react";
import useRedirect from "../custom-hooks/useRedirect";
import { useLocation } from "react-router-dom";

const PostTypeNavBar = ({ tabItems = [] }) => {
  const { pathname } = useLocation();
  const redirectTo = useRedirect();
  const [activeTab, setActiveTab] = useState("Create");
  useEffect(() => {
    if (pathname?.includes("create")) {
      setActiveTab("Create");
    } else if (pathname?.includes("published")) {
      setActiveTab("Published");
    } else if (pathname?.includes("draft")) {
      setActiveTab("Draft");
    } else if (pathname?.includes("trash")) {
      setActiveTab("Trash");
    } else if (pathname?.includes("update")) {
      setActiveTab("Update");
    }
  }, [pathname]);
  const redirectHandler = (_tab) => {
    if (activeTab == "Update" && _tab?.name == "Create") {
      return false;
    } else {
      redirectTo(_tab?.route);
    }
  };
  console.log("pathname", pathname);
  return (
    <>
      <ul class="flex flex-wrap justify-center -mb-px mt-4">
        {tabItems?.map((_tab) => (
          <li class="mr-2" onClick={() => redirectHandler(_tab)}>
            <a
              class={`inline-block p-4 ${
                activeTab == _tab?.name || activeTab == "Update" && _tab?.name == "Create"
                  ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
            >
              {activeTab == "Update" && _tab?.name == "Create"
                ? activeTab
                : _tab?.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostTypeNavBar;
