import React from "react";
import Select from "react-select";

const indianStates = [
  { label: "Andhra Pradesh", value: 0 },
  { label: "Arunachal Pradesh", value: 1 },
  { label: "Assam", value: 2 },
  { label: "Bihar", value: 3 },
  { label: "Chhattisgarh", value: 4 },
  { label: "Goa", value: 5 },
  { label: "Gujarat", value: 6 },
  { label: "Haryana", value: 7 },
  { label: "Himachal Pradesh", value: 8 },
  { label: "Jharkhand", value: 9 },
  { label: "Karnataka", value: 10 },
  { label: "Kerala", value: 11 },
  { label: "Madhya Pradesh", value: 12 },
  { label: "Maharashtra", value: 13 },
  { label: "Manipur", value: 14 },
  { label: "Meghalaya", value: 15 },
  { label: "Mizoram", value: 16 },
  { label: "Nagaland", value: 17 },
  { label: "Odisha", value: 18 },
  { label: "Punjab", value: 19 },
  { label: "Rajasthan", value: 20 },
  { label: "Sikkim", value: 21 },
  { label: "Tamil Nadu", value: 22 },
  { label: "Telangana", value: 23 },
  { label: "Tripura", value: 24 },
  { label: "Uttar Pradesh", value: 25 },
  { label: "Uttarakhand", value: 26 },
  { label: "West Bengal", value: 27 },
  { label: "Andaman and Nicobar Islands", value: 28 },
  { label: "Chandigarh", value: 29 },
  { label: "Dadra and Nagar Haveli and Daman and Diu", value: 30 },
  { label: "Lakshadweep", value: 31 },
  { label: "Delhi", value: 32 },
  { label: "Puducherry", value: 33 },
];

const TalesOfStartUps = () => {
  return (
    <>
      <div className="flex justify-end gap-4 align-center mt-4 me-4">
        {/* <span
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
        </span> */}
      </div>
      {/* {isPreview ? (
        <div className="p-12 md:p-auto">
          <Preview />
        </div>
      ) : ( */}
        <>
          <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-green-50 to-cyan-200">
            <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
              Basic informations
            </h2>
            <div className="flex flex-wrap justify-start gap-4 mb-4">
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Startup name
                </span>
                <input
                  type="text"
                  name="startup_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: BYJUS"
                />
              </label>
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Startup Link
                </span>
                <input
                  type="text"
                  name="startup_link"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: https://xyz.com"
                />
              </label>
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Legal name
                </span>
                <input
                  type="text"
                  name="legal_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: BYJUS"
                />
              </label>
            </div>
            <div className="flex flex-wrap justify-start gap-4 mb-4">
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Startup infornation
                </span>
                <textarea
                  rows="5"
                  type="text"
                  name="startup_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 resize-y"
                  placeholder="Enter startup description"
                />
              </label>
            </div>
            <div className="flex flex-wrap justify-start gap-4 mb-4">
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Headquarter
                </span>
                <Select
                  isMulti
                  name="headquarter"
                  placeholder={
                    <div className="text-left">Please select headquarters</div>
                  }
                  options={indianStates}
                  className="basic-multi-select w-full mt-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-left"
                  classNamePrefix="select"
                  menuPlacement="bottom"
                />
              </label>

              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  Founding Date
                </span>
                <input
                  type="date"
                  name="legal_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  // placeholder="Ex: https://xyz.com"
                />
              </label>
              <label class="grow block">
                <span class="block text-sm font-medium text-slate-700 text-left">
                  No. of Employees
                </span>
                <input
                  type="number"
                  name="legal_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: 10"
                />
              </label>
            </div>
          </div>
          <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-cyan-50 to-indigo-200">
            <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
              Core Team
            </h2>
            {/* {coreTeamList.map((_c, idx) => ( */}
              <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <div className="flex flex-wrap justify-start gap-4 mb-4">
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Team Member 1
                    </span>
                    <input
                      type="text"
                      name="startup_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: Mohit Rajput"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Designation
                    </span>
                    <input
                      type="text"
                      name="startup_link"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: CEO"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Profile Link
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: https://xyz.com"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Revenue Stream
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: E-commerce product"
                    />
                  </label>
                </div>
                <div className="flex justify-end gap-4">
                  {/* {!(coreTeamList.length - 1 == idx) && ( */}
                    <button 
                    // onClick={() => deleteCoreTeam(idx)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        className="fill-red-600"
                      >
                        <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                      </svg>
                    </button>
                  {/* )} */}
                  {/* {coreTeamList.length - 1 == idx && ( */}
                    <button
                      className="rounded-md bg-blue-500 p-1 px-2 text-white"
                      // onClick={addMoreCoreTeam}
                    >
                      Add more
                    </button>
                  {/* )} */}
                </div>
              </div>
            {/* ))} */}
          </div>
          <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-purple-50 to-rose-200">
            <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
              Target Market
            </h2>
            {/* {targetMarketList.map((_c, idx) => ( */}
              <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <div className="flex flex-wrap justify-start gap-4 mb-4">
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Business Model
                    </span>
                    <Select
                      name="headquarter"
                      defaultValue={[{ label: "B2B", value: 0 }]}
                      placeholder={
                        <div className="text-left">
                          Please select business model
                        </div>
                      }
                      options={[
                        { label: "B2B", value: 1 },
                        { label: "B2C", value: 2 },
                      ]}
                      className="basic-multi-select w-full mt-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-left"
                      classNamePrefix="select"
                      menuPlacement="bottom"
                      // onChange={(e) => targetMarketHandler(e, idx)}
                    />
                    {/* <input
                  type="text"
                  name="legal_name"
                  class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Ex: B2B"
                /> */}
                  </label>
                  {/* {targetMarket[idx].label == "B2B" && ( */}
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        Client Segment
                      </span>
                      <input
                        type="text"
                        name="startup_name"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: Collaboration, Consumer, Services"
                      />
                    </label>
                  {/* )} */}
                  {/* {targetMarket[idx].label == "B2B" && ( */}
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        Target Companies
                      </span>
                      <input
                        type="text"
                        name="startup_link"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: Startup,  Small Enterprise,  Medium Enterprise "
                      />
                    </label>
                  {/* )} */}
                  {/* {targetMarket[idx].label == "B2B" && ( */}
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        Target Geography
                      </span>
                      <input
                        type="text"
                        name="legal_name"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: India, global"
                      />
                    </label>
                  {/* )} */}
                  {/* </div>
                <div className="flex flex-wrap justify-start gap-4 mb-4"> */}
                  {/* {targetMarket[idx].label == "B2C" && ( */}
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        User Age
                      </span>
                      <input
                        type="text"
                        name="legal_name"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: 10 to 20, 30 to 40"
                      />
                    </label>
                  {/* )} */}
                  {/* {targetMarket[idx].label == "B2C" && ( */}
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        User Income
                      </span>
                      <input
                        type="text"
                        name="startup_name"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: Lower Income, Lower-middle Income, Upper-middle Income"
                      />
                    </label>
                  {/* )} */}
                  {/* {targetMarket[idx]?.label == "B2C" && ( */}
                    <label class="grow block">
                      <span class="block text-sm font-medium text-slate-700 text-left">
                        User Location
                      </span>
                      <input
                        type="text"
                        name="startup_link"
                        class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Ex: India, global"
                      />
                    </label>
                  {/* )} */}
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Total Funding
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: 3.2"
                    />
                  </label>
                </div>
                <div className="flex justify-end gap-4">
                  {/* {!(targetMarketList.length - 1 == idx) && ( */}
                    <button 
                    // onClick={() => deleteTargetMarket(idx)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        className="fill-red-600"
                      >
                        <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                      </svg>
                    </button>
                  {/* )} */}
                  {/* {targetMarketList.length - 1 == idx && ( */}
                    <button
                      className="rounded-md bg-blue-500 p-1 px-2 text-white"
                      // onClick={addMoreTargetMarket}
                    >
                      Add more
                    </button>
                  {/* )} */}
                </div>
              </div>
            {/* ))} */}
          </div>
          <div className="rounded-lg m-2 md:m-8 p-4 bg-gradient-to-r from-amber-50 to-lime-200">
            <h2 className="text-3xl text-gray-700 font-bold mb-5 text-left">
              Investor
            </h2>
            {/* {investorList.map((_c, idx) => ( */}
              <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                <h2 className="text-xl text-gray-700 font-bold mb-5 text-left">
                  Round
                </h2>
                <div className="flex flex-wrap justify-start gap-4 mb-4">
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Series Name
                    </span>
                    <input
                      type="text"
                      name="startup_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: Series A"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Date
                    </span>
                    <input
                      type="date"
                      name="startup_link"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      // placeholder="Ex: CEO"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Target Geography
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: India, Global"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Funding (USD Mns)
                    </span>
                    <input
                      type="number"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: 100"
                    />
                  </label>
                  <label class="grow block">
                    <span class="block text-sm font-medium text-slate-700 text-left">
                      Investors
                    </span>
                    <input
                      type="text"
                      name="legal_name"
                      class="w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Ex: Mukesh Anbani"
                    />
                  </label>
                </div>
                <div className="flex justify-end gap-4">
                  {/* {!(investorList.length - 1 == idx) && ( */}
                    <button 
                    // onClick={() => deleteInvestor(idx)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        className="fill-red-600"
                      >
                        <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                      </svg>
                    </button>
                  {/* )} */}
                  {/* {investorList.length - 1 == idx && ( */}
                    <button
                      className="rounded-md bg-blue-500 p-1 px-2 text-white"
                      // onClick={addMoreInvestort}
                    >
                      Add more
                    </button>
                  {/* )} */}
                </div>
              </div>
            {/* ))} */}
          </div>
          <div className="flex justify-end gap-4 m-2 md:m-8 p-4">
            <button
              className="rounded-md bg-gray-400 p-1 px-2 text-white"
              // onClick={() => tabHandler("Draft")}
            >
              Save as draft
            </button>
            <button
              className="rounded-md bg-blue-500 p-1 px-2 text-white"
              // onClick={() => tabHandler("Published")}
            >
              Publish
            </button>
          </div>
        </>
      {/* )} */}
    </>
  );
};

export default TalesOfStartUps;
