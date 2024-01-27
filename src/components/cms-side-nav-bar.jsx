import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import useRedirect from "../custom-hooks/useRedirect";

const CmsSideNavBar = () => {
  const { pathname } = useLocation();
  const redirectTo = useRedirect();
  const pageTypeHandler = useMemo(() => {
    if (pathname?.includes("published")) {
      return 1;
    } else if (pathname?.includes("draft")) {
      return 2;
    } else {
      return 3;
    }
  }, [pathname]);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [activeSideBarTab, setActiveSideBarTab] = useState("add-industry");
  const sideBarHandler = () => setIsSideBarOpen(!isSideBarOpen);

  const redirectionHandler = (_clickedTab) => {
    if (_clickedTab?.includes("blogs")) {
      redirectTo("blogs/create");
    } else if (_clickedTab?.includes("infographic")) {
      redirectTo("infographic/create");
    } else if (_clickedTab?.includes("glossary")) {
      redirectTo("glossary/create");
    } else if (_clickedTab?.includes("add-industry")) {
      redirectTo("add-industry/create");
    } else {
      redirectTo("tales-of-startups/create");
    }
    setIsSideBarOpen(false);
  };

  useEffect(() => {
    if (pathname?.includes("blogs")) {
      setActiveSideBarTab("blogs");
    } else if (pathname?.includes("infographic")) {
      setActiveSideBarTab("infographic");
    } else if (pathname?.includes("glossary")) {
      setActiveSideBarTab("glossary");
    } else if (pathname?.includes("add-industry")) {
      setActiveSideBarTab("add-industry");
    } else {
      setActiveSideBarTab("tales-of-startups");
    }
  }, [pathname]);
  return (
    <>
      <button
        className="fixed top-2 left-2 rounded-full bg-blue-500 p-2 fill-black hover:fill-white"
        onClick={sideBarHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 72 72"
        >
          <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
        </svg>
      </button>
      {/* SIDE BAR */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-900 transform ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform ease-in-out duration-300 z-10`}
      >
        <button
          className="absolute top-2 right-2 p-1 rounded-full bg-red-200 hover:bg-white fill-black hover:fill-red-500"
          onClick={sideBarHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
          >
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
          </svg>
        </button>
        <div className="flex flex-col justify-start p-4 cursor-pointer">
          <p
            className={`${
              activeSideBarTab == "add-industry"
                ? "text-green-500"
                : "text-white"
            } hover:text-green-500 font-bold text-left`}
            onClick={() => redirectionHandler("add-industry")}
          >
            Add Industry
          </p>
          <p
            className={`${
              activeSideBarTab == "tales-of-startups"
                ? "text-green-500"
                : "text-white"
            } hover:text-green-500 font-bold text-left`}
            onClick={() => redirectionHandler("tales-of-startups")}
          >
            Tails of Startup
          </p>
          <p
            className={`${
              activeSideBarTab == "blogs" ? "text-green-500" : "text-white"
            } hover:text-green-500 font-bold text-left`}
            onClick={() => redirectionHandler("blogs")}
          >
            Blogs
          </p>
          <p
            className={`${
              activeSideBarTab == "infographic"
                ? "text-green-500"
                : "text-white"
            } hover:text-green-500 font-bold text-left`}
            onClick={() => redirectionHandler("infographic")}
          >
            Infographics
          </p>
          <p
            className={`${
              activeSideBarTab == "glossary" ? "text-green-500" : "text-white"
            } hover:text-green-500 font-bold text-left`}
            onClick={() => redirectionHandler("glossary")}
          >
            Glossary
          </p>
        </div>
      </div>
    </>
  );
};

export default CmsSideNavBar;
