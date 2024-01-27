import React, { useCallback, useEffect, useState } from "react";
import PostTypeNavBar from "../../../components/post-type-nav-bar";
import InfographicPreview from "../../../components/preview/infographic-preview";
import { useLocation } from "react-router-dom";
import useNotiStack from "../../../custom-hooks/useNotiStack";
import {
  useAddInfographics,
  useInfographicDetails,
  useUpdateInfographic,
} from "../../../react-query/query-hooks/infographicQuery.hooks";
import useRedirect from "../../../custom-hooks/useRedirect";

const tabItems = [
  { name: "Create", route: "infographic/create" },
  { name: "Published", route: "infographic/published" },
  { name: "Draft", route: "infographic/draft" },
  { name: "Trash", route: "infographic/trash" },
];

const CreateEditInfographic = () => {
  const { pathname } = useLocation();
  const { toastSuccess, toastError } = useNotiStack();
  const redirectTo = useRedirect();
  const [isPreview, setIsPreview] = useState(false);
  const [infographicData, setInfographicData] = useState({
    title: "",
    authorName: "",
    description: "",
    // featuredImg: null,
    // content: "",
  });
  const [coverImg, setCoverImg] = useState(null);
  const [infographicId, setInfographicId] = useState("");

  const {
    data: infographicDetails,
    isLoading: infographicDetailsLoader,
    refetch,
  } = useInfographicDetails(
    pathname?.split("/")?.at(-1),
    !!pathname?.split("/")?.at(-1),
    (response) => {
      const { title, author_name, image, description, post_status, id } =
        response ?? {};
      setInfographicData({
        title: title,
        authorName: author_name,
        description: description,
      });
      setCoverImg(image);
    }
  );
  const { mutate: createInfographic } = useAddInfographics();
  const { mutate: updateInfographic } = useUpdateInfographic();

  const previewHandler = () => setIsPreview(!isPreview);
  const getInfographicData = useCallback(
    (field, value) =>
      setInfographicData({ ...infographicData, [field]: value }),
    [infographicData]
  );
  const getCoverImage = (img) => setCoverImg(img);

  const addPostHandler = (type = "publish") => {
    const { title, authorName, description } = infographicData ?? {};
    if (!!infographicId) {
      if (type == "publish") {
        const redirectionUrl =
          infographicDetails?.post_status == "1"
            ? "infographic/published"
            : infographicDetails?.post_status == "2"
            ? "infographic/draft"
            : "infographic/trash";
        const formData = new FormData();
        formData.append("infographicId", infographicDetails?.id ?? "");
        if (!!title) {
          formData.append("title", title);
        }
        if (!!authorName) {
          formData.append("author_name", authorName);
        }
        if (typeof coverImg != "string") {
          formData.append("image", coverImg);
        }
        if (!!description) {
          formData.append("description", description);
        }
        // formData.append("published_date", new Date());
        // formData.append("author_image", null);
        updateInfographic(formData, {
          onSuccess: () => {
            toastSuccess("Infographic updated successfully");
            redirectTo(redirectionUrl);
          },
          onError: () => {
            toastError("Something went wrong please try again later.");
          },
        });
      } else {
        setInfographicData({
          title: "",
          authorName: "",
          description: "",
        });
        setCoverImg(null);
        setIsPreview(false);
        redirectTo("infographic/create");
      }
    } else {
      if (!!title && !!authorName && !!description && !!coverImg) {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("author_name", authorName);
        formData.append("image", coverImg);
        formData.append("description", description);
        formData.append("post_status", type == "publish" ? "1" : "2");
        createInfographic(formData, {
          onSuccess: () => {
            toastSuccess("Infographic updated successfully");
            redirectTo(
              type == "publish" ? "infographic/published" : "infographic/draft"
            );
            // redirectTo(redirectionUrl);
          },
          onError: () => {
            toastError("Something went wrong please try again later.");
          },
        });
      }
    }
  };
  const removeImage = () => setCoverImg(null);
  useEffect(() => {
    if (pathname?.includes("update")) {
      let urlPram = pathname?.split("/") ?? [];
      if (urlPram?.length > 0 && parseInt(urlPram?.at(-1)) > 0) {
        setInfographicId(urlPram?.at(-1));
        refetch();
      }
    }
  }, [pathname]);
  return (
    <>
      <PostTypeNavBar tabItems={tabItems} />
      <div className="flex justify-end gap-4 align-center mt-4 me-4">
        {!!coverImg && (
          <span
            className={`text-white bg-gradient-to-r ${
              isPreview ? "from-blue-400" : "from-green-400"
            } ${isPreview ? "via-blue-500" : "via-green-500"} ${
              isPreview ? "to-blue-600" : "to-green-600"
            } hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:${
              isPreview ? "ring-blue-300" : "ring-green-300"
            } dark:focus:${
              isPreview ? "ring-blue-800" : "ring-green-800"
            } shadow-lg ${
              isPreview ? "shadow-blue-500/50" : "shadow-green-500/50"
            } dark:shadow-lg dark:${
              isPreview ? "shadow-blue-800/80" : "shadow-green-800/80"
            } font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
            onClick={previewHandler}
          >
            {isPreview ? "Back to edit" : "Preview"}
          </span>
        )}
      </div>
      {isPreview ? (
        <InfographicPreview
          renderData={infographicData}
          featuredImg={coverImg}
        />
      ) : (
        <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-green-50 to-cyan-200">
          <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
            {!!infographicId ? "Edit" : "Add"} Infographics
          </h2>
          <div class="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="flex flex-wrap justify-start gap-4 mb-4">
                <label class="grow block">
                  <span class="block text-sm font-medium text-slate-700 text-left">
                    Title
                  </span>
                  <input
                    value={infographicData?.title}
                    type="text"
                    name="startup_name"
                    class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Ex: This is my blog"
                    onChange={(e) =>
                      getInfographicData("title", e.target.value)
                    }
                  />
                </label>

                <label class="grow block">
                  <span class="block text-sm font-medium text-slate-700 text-left">
                    Author
                  </span>
                  <input
                    value={infographicData?.authorName}
                    type="text"
                    name="legal_name"
                    class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Ex: Jhon Doe"
                    onChange={(e) =>
                      getInfographicData("authorName", e.target.value)
                    }
                  />
                </label>
              </div>
              <div className="flex flex-wrap justify-start gap-4 mb-4">
                <label class="grow block">
                  <span class="block text-sm font-medium text-slate-700 text-left">
                    Description
                  </span>
                  <textarea
                    value={infographicData?.description}
                    rows="5"
                    type="text"
                    name="startup_name"
                    class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 resize-y"
                    placeholder="Enter startup description"
                    onChange={(e) =>
                      getInfographicData("description", e.target.value)
                    }
                  />
                </label>
              </div>
            </div>
            {!!coverImg ? (
              <div>
                <img
                  src={
                    typeof coverImg == "string"
                      ? `https://www.talesoffinance.com/infographics/${coverImg}`
                      : URL.createObjectURL(coverImg)
                  }
                  //   src={'https://drive.google.com/uc?export=view&id=1CIQgjiF6xXdwXrUcqMW-n6o5vvVQAZI5'}
                  className="object-cover h-56 w-96 rounded-lg border-2 border-slate-950"
                />
                <div className="flex justify-center items-center gap-4 mt-2">
                  {/* <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={changeImage}
          >
            Change Image
          </button> */}
                  <button
                    type="button"
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={removeImage}
                  >
                    Remove Image
                  </button>
                </div>
              </div>
            ) : (
              <div className="">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm text-left font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div className="mt-1 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-gray-300"
                      viewBox="0 0 24 24"
                      fill="white"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span className="p-2">Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => getCoverImage(e.target.files[0])}
                        />
                      </label>
                      <p className="pl-1 ps-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex justify-end gap-4 m-2 md:m-8 p-4">
        <button
          className="rounded-md bg-gray-400 p-1 px-2 text-white"
          onClick={() => addPostHandler("draft")}
        >
          {!!infographicId ? "Discart" : "Save as draft"}
        </button>
        <button
          className="rounded-md bg-blue-500 p-1 px-2 text-white"
          onClick={() => addPostHandler("publish")}
        >
          {!!infographicId ? "Update" : "Publish"}
        </button>
      </div>
    </>
  );
};

export default CreateEditInfographic;
