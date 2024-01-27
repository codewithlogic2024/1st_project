import React from "react";

const backdrop = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      // onClick={handleClose}
    >
      <div className="absolute bg-black opacity-50 inset-0"></div>
      <div className="z-10">
        <div className="bg-white p-5 rounded">
          <div className="flex items-center justify-center">
            <div className="mr-2">
              <svg
                className="animate-spin h-5 w-5 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V1.5"
                ></path>
              </svg>
            </div>
            <div>Loading...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default backdrop;
