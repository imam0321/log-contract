import { useState } from "react";

export default function ProfileEdit() {
  const [isOnExclusive, setIsOnExclusive] = useState(false);
  const [isOnCollection, setIsOnCollection] = useState(false);

  const handleExclusiveToggle = (event) => {
    event.preventDefault();
    setIsOnExclusive(!isOnExclusive);
  };
  const handleCollection = (event) => {
    event.preventDefault();
    setIsOnCollection(!isOnCollection);
  };

  return (
    <>
      <div className="">

        <form className="md:w-3/5 mx-20">
          <div className="text-[#60646C] flex justify-between items-center mb-7">
            <h1 className="text-3xl font-bold">Edit Profile</h1>
            <p>last update: 20SS/SS/SS</p>
          </div>

          <div className="flex items-center mb-5">
            <div className="w-[49%] mr-6">
              <label className="block text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow-md"
                defaultValue="Murasaki"
              />
            </div>
            <div className="flex items-center w-[49%]">
              <div className="w-full mr-2">
                <label className="block text-sm mb-1">
                  Country
                </label>
                <select
                  type="text"
                  name="name"
                  className="w-full px-2 py-1 border border-[#E4E4E7] rounded-md shadow-md"
                >
                  <option>China</option>
                </select>
              </div>
              <div className="w-full mr-2">
                <label className="block text-sm mb-1">
                  City
                </label>
                <select
                  type="text"
                  name="name"
                  className="w-full px-2 py-1 border border-[#E4E4E7] rounded-md shadow-md"
                >
                  <option>Hong Kong</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-5">
            <div className="w-[49%] mr-6">
              <label className="block text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow-md"
                defaultValue="Murasaki@theyta.com"
              />
            </div>
            <div className="w-[49%]">
              <label className="block text-sm mb-1">
                Your Profession
              </label>
              <input
                type="text"
                name="profession"
                className="w-full px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow-md"
                defaultValue="Career, Talent, Academic..."
              />
            </div>
          </div>

          <div className="flex items-center mb-5">

            <div className="flex items-center w-[49%] mr-6">
              <div className="w-full">
                <label className="block text-sm mb-1">
                  Phone Number
                </label>
                <div className="">
                  <select
                    type="text"
                    name="number"
                    className="px-2 py-3 border border-[#E4E4E7] rounded-md shadow-md mr-2"
                  >
                    <option>+98</option>
                  </select>
                  <input type="number" name="number" defaultValue="9120000000" className="w-[80%] px-3 py-3 text-[#71717A] border border-[#E4E4E7] rounded-md shadow-md" />
                </div>
              </div>
            </div>

            <div className="w-[49%]">
              <label className="block text-sm mb-1">
                Introduction
              </label>
              <textarea
                type="text"
                name="introduction"
                className="w-full px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow-md"
                defaultValue="Career, Talent, Academic..."
              />
            </div>
          </div>

          <div className="flex items-center mb-5">
            <div className="flex items-center w-[49%] mr-6">
              <div className="w-full mr-2">
                <label className="block text-sm mb-1">
                  Sex
                </label>
                <select
                  type="text"
                  name="sex"
                  className="w-full px-2 py-1 border border-[#E4E4E7] rounded-md shadow-md"
                >
                  <option>Male</option>
                </select>
              </div>
              <div className="w-full mr-2">
                <label className="block text-sm mb-1">
                  Age Group
                </label>
                <select
                  type="text"
                  name="age"
                  className="w-full px-2 py-1 border border-[#E4E4E7] rounded-md shadow-md"
                >
                  <option>18 - 25</option>
                </select>
              </div>
            </div>
            <div className="w-[49%]">
              <label className="block text-sm mb-1">
                Education
              </label>
              <input
                type="text"
                name="education"
                className="w-full px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow-md"
                defaultValue="Degree"
              />
            </div>
          </div>

          <hr className="border border-[#D9D9D9] mt-8 mb-2" />

          {/* multiple buttons  */}
          <div className="mt-7 mb-11">
            <label className="block text-sm mb-1">
              Interest
            </label>
            <div className="flex items-center gap-2">
              <button
                className="py-2 px-4 bg-[#1E40AF] text-white text-sm rounded-md"
              >
                Economy
              </button>
              <button
                className="py-2 px-4 text-sm border border-[#E2E8F0] rounded-md"
              >
                Jobs
              </button>
              <button
                className="py-2 px-4 text-sm border border-[#E2E8F0] rounded-md"
              >
                Education
              </button>
              <button
                className="py-2 px-4 text-sm border border-[#E2E8F0] rounded-md"
              >
                Ehfsabc
              </button>
              <button
                className="py-2 px-4 text-sm border border-[#E2E8F0] rounded-md"
              >
                Annual
              </button>
              <button
                className="py-2 px-4 bg-[#1E40AF] text-white text-sm rounded-md"
              >
                Monthly
              </button>
              <button
                className="py-2 px-4 text-sm border border-[#E2E8F0] rounded-md"
              >
                Kfhee
              </button>
              <button
                className="py-2 px-4 text-sm border border-[#E2E8F0] rounded-md"
              >
                Annual
              </button>
            </div>
          </div>

          <hr className="border border-[#D9D9D9] mt-8 mb-2" />

          <div className="mb-20 mt-7">
            <label className="block text-sm mb-1">
              Subscription
            </label>
            <div className="flex justify-between items-start gap-x-6 mt-6">

              <div className="w-1/2">
                <div className="flex items-center">
                  <div className="text-center px-5 py-4 border-2 border-[#1E40AF] rounded-md mr-4">
                    <p>👁️</p>
                    <p className="mt-3">Basic Member</p>
                  </div>
                  <div className="text-center px-5 py-4  border-2 border-slate-100 rounded-md">
                    <p>👁️</p>
                    <p className="mt-3">Pro Member</p>
                  </div>
                </div>
                <div className="mt-9">
                  <label className="block text-sm mb-2">
                    Card number
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow-md"
                  />
                </div>
                <div className="flex items-center mt-9">
                  <div className="w-full mr-2">
                    <label className="block text-sm mb-2">
                      Expires
                    </label>
                    <select
                      type="text"
                      name="expires"
                      className="w-full px-2 py-1 border border-[#E4E4E7] rounded-md shadow-md"
                    >
                      <option>Month</option>
                    </select>
                  </div>
                  <div className="w-full mr-2">
                    <label className="block text-sm mb-2">
                      Year
                    </label>
                    <select
                      type="text"
                      name="year"
                      className="w-full px-2 py-1 border border-[#E4E4E7] rounded-md shadow-md"
                    >
                      <option>Year</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label className="block text-sm mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      className="w-full px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow-md"
                      defaultValue="CVC"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="md:w-1/2 w-full py-2 px-5 bg-[#DB2777] text-white rounded-md mt-12"
                >
                  Save 👁️
                </button>
              </div>



              <div className="w-1/2">
                <div className="">

                  <h1 className="text-sm font-medium">Exclusive Offers & Product News</h1>
                  <div className="flex justify-between items-start">
                    <p className="text-[#71717A]">
                      Receive discounts, tips, updates, and expert advice through email.
                    </p>
                    <button
                      onClick={handleExclusiveToggle}
                      type="button"
                      className={`w-16 h-6 flex items-center rounded-full p-1 transition duration-300 ${isOnExclusive ? "bg-black" : "bg-gray-300"
                        }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${isOnExclusive ? "translate-x-6" : "translate-x-0"
                          }`}
                      ></div>
                    </button>
                  </div>

                  <h1 className="text-sm font-medium mt-6">Collection of Data</h1>
                  <div className="flex justify-between">
                    <p className="text-[#71717A]">
                      Agree to the Terms of Usage and Privacy Policy.
                    </p>
                    <button
                      onClick={handleCollection}
                      type="button"
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${isOnCollection ? "bg-black" : "bg-gray-300"
                        }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ${isOnCollection ? "translate-x-6" : "translate-x-0"
                          }`}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>


    </>
  )
}
