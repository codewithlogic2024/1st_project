import React, { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import CmsSideNavBar from "../components/cms-side-nav-bar";

const CmsLayout = ({ props }) => {
  console.log("props", props);
  return (
    <>
      <CmsSideNavBar />
      <div className="w-100">
        <div className="h-100">
          <Suspense fallback={<p>Loading.....</p>}>
            <Outlet></Outlet>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default memo(CmsLayout);
