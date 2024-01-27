import React, { useCallback, useEffect, useState } from "react";
import PostTypeNavBar from "../../../components/post-type-nav-bar";
import {
  useAddGlossary,
  useGlossaryDetails,
  useUpdateGlossary,
} from "../../../react-query/query-hooks/glossaryQuery.hook";
import { useLocation } from "react-router-dom";
import useNotiStack from "../../../custom-hooks/useNotiStack";
import useRedirect from "../../../custom-hooks/useRedirect";

const tabItems = [
  { name: "Create", route: "glossary/create" },
  { name: "Published", route: "glossary/published" },
  { name: "Draft", route: "glossary/draft" },
  { name: "Trash", route: "glossary/trash" },
];

const CreateEditGlossary = () => {
  const { pathname } = useLocation();
  const { toastSuccess, toastError } = useNotiStack();
  const redirectTo = useRedirect();
  const [glossaryId, setGlossaryId] = useState("");
  const [glossaryData, setGlossaryData] = useState({
    term: "",
    definition: "",
    type: "",
  });

  const {
    data: glossaryDetails,
    isLoading: glossaryDetailsLoader,
    refetch,
  } = useGlossaryDetails(
    pathname?.split("/")?.at(-1),
    !!pathname?.split("/")?.at(-1),
    (response) => {
      const { term, definition, TYPE } = response ?? {};
      setGlossaryData({
        term: term,
        definition: definition,
        type: TYPE,
      });
    }
  );
  const { mutate: createGlossary } = useAddGlossary();
  const { mutate: updateGlossary } = useUpdateGlossary();
  const getGlossaryData = useCallback(
    (field, value) => setGlossaryData({ ...glossaryData, [field]: value }),
    [glossaryData]
  );
  const addPostHandler = (btnType = "publish") => {
    const { term, definition, type } = glossaryData ?? {};
    if (!!glossaryId) {
      if (btnType == "publish") {
        const redirectionUrl =
        glossaryDetails?.post_status == "1"
            ? "glossary/published"
            : glossaryDetails?.post_status == "2"
            ? "glossary/draft"
            : "glossary/trash";
        const payload = { glossaryId: glossaryDetails?.id ?? "" };
        if (term!=glossaryDetails?.term) {
          payload.term=term
          payload.letter=term.charAt(0).toUpperCase()
        }
        if (definition!=glossaryDetails?.definition) {
          payload.definition=definition
        }
        if (type!=glossaryDetails?.TYPE) {
          payload.type=type
        }
        updateGlossary(payload, {
          onSuccess: () => {
            toastSuccess("Glossary updated successfully");
            redirectTo(redirectionUrl);
          },
          onError: () => {
            toastError("Something went wrong please try again later.");
          },
        });
      } else {
        setGlossaryData({
          term: "",
          definition: "",
          type: "",
        });
        redirectTo("glossary/create");
        setGlossaryId("");
      }
    } else {
      if (!!term && !!definition && !!type) {
        const payload = {
          ...glossaryData,
          letter: term.charAt(0).toUpperCase(),
          post_status: btnType == "publish" ? "1" : "2",
        };
        createGlossary(payload, {
          onSuccess: () => {
            toastSuccess("Glossary updated successfully");
            redirectTo(
              btnType == "publish" ? "glossary/published" : "glossary/draft"
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
  useEffect(() => {
    if (pathname?.includes("update")) {
      let urlPram = pathname?.split("/") ?? [];
      if (urlPram?.length > 0 && parseInt(urlPram?.at(-1)) > 0) {
        setGlossaryId(urlPram?.at(-1));
        refetch();
      }
    }
  }, [pathname]);
  return (
    <>
      <PostTypeNavBar tabItems={tabItems} />
      <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-green-50 to-cyan-200">
        <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
          Add Glossary
        </h2>
        <div className="flex flex-wrap justify-start gap-4 mb-4">
          <label class="grow block">
            <span class="block text-sm font-medium text-slate-700 text-left">
              Term
            </span>
            <input
              type="text"
              name="term"
              value={glossaryData?.term}
              class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Ex: Accelerator"
              onChange={(e) => getGlossaryData("term", e.target.value)}
            />
          </label>
          <label class="grow block">
            <span class="block text-sm font-medium text-slate-700 text-left">
              Type
            </span>
            <input
              type="text"
              name="type"
              value={glossaryData?.type}
              class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Ex: Web3"
              onChange={(e) => getGlossaryData("type", e.target.value)}
            />
          </label>
        </div>
        <div className="flex flex-wrap justify-start gap-4 mb-4">
          <label class="grow block">
            <span class="block text-sm font-medium text-slate-700 text-left">
              Definition
            </span>
            <textarea
              rows="5"
              type="text"
              name="defination"
              value={glossaryData?.definition}
              class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 resize-y"
              placeholder="Enter term definition"
              onChange={(e) => getGlossaryData("definition", e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-4 m-2 md:m-8 p-4">
        <button
          className="rounded-md bg-gray-400 p-1 px-2 text-white"
          onClick={() => addPostHandler("draft")}
        >
          {!!glossaryId ? "Discart" : "Save as draft"}
        </button>
        <button
          className="rounded-md bg-blue-500 p-1 px-2 text-white"
          onClick={() => addPostHandler("publish")}
        >
          {!!glossaryId ? "Update" : "Publish"}
        </button>
      </div>
    </>
  );
};

export default CreateEditGlossary;
