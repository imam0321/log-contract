import { useState } from "react";


export default function DataLibrary() {
  const [isOnCopyright, setIsOnCopyright] = useState(false);

  const handleCopyrightToggle = (event) => {
    event.preventDefault();
    setIsOnCopyright(!isOnCopyright);
  };

  return (
    <>
      <div className="mt-4 ms-6 mr-8 md:block hidden">
        <nav
          className="md:flex items-center w-[19%] h-[24px] text-sm border border-[#E9E9EB] rounded-md px-2 py-2"
        >
          <ol className="flex items-center space-x-1 text-[#60646C]">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <span className="px-1 text-[#60646C]">{'>'}</span>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Member
              </a>
            </li>
            <li>
              <span className="px-1 text-[#60646C]">{'>'}</span>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Data Library
              </a>
            </li>
          </ol>
        </nav>
        <div className="flex justify-between items-center mt-[20px]">
          <h1 className="text-lg font-bold">Upload Data on Data Library</h1>
          <div className="flex items-center">
            <button
              className="h-[36px] py-2 px-5 bg-[#DB2777] text-white rounded-md"
            >
              Preview Data
            </button>
            <button className="h-[36px] flex items-center border-2 border-dashed rounded shadow px-4 py-2">👁️</button>
          </div>
        </div>
        <hr className="border border-[#D9D9D9] mt-5 mb-[60px] -ms-6 -mr-8" />
      </div>

      <div className="flex justify-start gap-x-7">
        <nav className="w-[15%] md:block hidden ms-11">
          <h3 className="font-semibold">Data</h3>
          <ul className="pt-2">
            <li><span className="font-medium text-sm pr-4">{" "}</span>Overview</li>
            <li><span className="font-medium text-sm pr-1">✓</span>Table Data</li>
            <li><span className="font-medium text-sm pr-4">{" "}</span>Details</li>
            <li><span className="font-medium text-sm pr-4">{" "}</span>Download</li>
          </ul>
        </nav>

        <form className="lg:w-[45%] w-full md-mx-2 mx-4">
          <h1 className="text-2xl text-[#60646C] font-bold">Dataset</h1>
          <div className="mb-[22px] mt-[29px]">
            <label className="block font-medium text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              name="dataName"
              className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
              placeholder="data name"
            />
          </div>
          <div className="mb-[27px]">
            <label className="block font-medium text-sm mb-2">
              Description
            </label>
            <input
              type="text"
              name="dataName"
              className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
              placeholder="About your dataset"
            />
          </div>

          <div className="flex items-center mb-[27px] gap-x-6">
            <div className="w-full">
              <label className="block font-medium text-sm mb-2">
                Category
              </label>
              <select
                type="text"
                name="sex"
                className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
              >
                <option>Economics</option>
              </select>
            </div>
            <div className="w-full">
              <label className="block font-medium text-sm mb-2">
                Topic
              </label>
              <select
                type="text"
                name="age"
                className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
              >
                <option>Education</option>
              </select>
            </div>
          </div>

          <div className="mb-[32px]">
            <label className="block font-medium text-sm mb-2">
              Source of Data
            </label>
            <input
              type="text"
              name="dataName"
              className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
              placeholder="e.g. Government, NGO..."
            />
          </div>

          <div className="mb-[27px]">
            <label className="block font-medium text-sm mb-2">
              The URL of Data Source (Optional)
            </label>
            <input
              type="text"
              name="dataName"
              className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
              placeholder="e.g. Website, PDF"
            />
          </div>

          <div className="flex items-center mb-[25px] gap-x-6">
            <div className="w-full">
              <label className="block font-medium text-sm mb-2">
                Price
              </label>
              <select
                type="text"
                name="sex"
                className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
              >
                <option>Paid</option>
              </select>
            </div>
            <div className="w-full">
              <label className="block font-medium text-sm mb-2">
                T-point
              </label>
              <select
                type="text"
                name="age"
                className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
              >
                <option>100</option>
              </select>
            </div>
          </div>

          <div className="flex items-center mb-[37px]">
            <div className="w-1/2 text-center px-5 py-4 border-2 border-[#1E40AF] rounded-md mr-4">
              <p>👁️</p>
              <p className="mt-3">Upload</p>
            </div>
            <div className="w-1/2 text-center px-5 py-4  border-2 border-slate-100 rounded-md">
              <p>👁️</p>
              <p className="mt-3">Template Download</p>
            </div>
          </div>

          <div className="mb-[55px] mr-4">
            <h1 className="text-sm font-medium">
              Copyright
            </h1>
            <div className="flex justify-between items-start">
              <p className="text-[#71717A] w-[90%]">
                Agree to the <span className="underline">Terms of Usage</span> and <span className="underline">Privacy Policy.</span>
              </p>
              <div className="w-[10%]">
                <button
                  onClick={handleCopyrightToggle}
                  type="button"
                  className={`w-[50px] h-6 flex items-center rounded-full p-1 transition duration-300 ${isOnCopyright ? "bg-black" : "bg-gray-300"
                    }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${isOnCopyright ? "translate-x-6" : "translate-x-0"
                      }`}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          <div className="md:block flex justify-center mb-[121px]">
          <button
            type="submit"
            className="w-[50%] h-[36px] py-2 px-5 bg-[#DB2777] text-white rounded-md "
          >
            Next
          </button>
          </div>
        </form>
      </div>

    </>
  )
}
