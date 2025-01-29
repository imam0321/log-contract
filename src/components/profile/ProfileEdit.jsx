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
      <form className="md:w-3/5 w-full md:mx-20">
        <div className="text-[#60646C] md:flex justify-between items-center mb-7 hidden">
          <h1 className="text-3xl font-bold">Edit Profile</h1>
          <p>last update: 20SS/SS/SS</p>
        </div>

        <div className="md:flex md:flex-row flex-col md:justify-between mb-5 md:mt-1  mt-[22px] gap-x-5 md:mx-0 mx-4">
          {/* Form top part  */}
          <div className="md:w-[50%] w-full">
            {/* Name */}
            <div className="mb-[22px]">
              <label className="block font-medium text-sm mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
                defaultValue="Murasaki"
              />
            </div>
            {/* Email  */}
            <div className="mb-[22px]">
              <label className="block font-medium text-sm mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
                defaultValue="Murasaki@theyta.com"
              />
            </div>
            {/* phone number  */}
            <div className="mb-[25px]">
              <label className="block font-medium text-sm mb-1">
                Phone Number
              </label>
              <div>
                <select
                  type="text"
                  name="number"
                  className="w-[17%] h-[44px] md:px-2 px-0 py-2 border border-[#E4E4E7] rounded-md shadow outline-none mr-2"
                >
                  <option>+98</option>
                </select>
                <input
                  type="number"
                  name="number"
                  defaultValue="9120000000"
                  className="w-[80%] h-[44px] px-3 py-2 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none" />
              </div>
            </div>
            {/* age and sex  */}
            <div className="flex items-center gap-x-2">
              <div className="w-full">
                <label className="block font-medium text-sm mb-1">
                  Sex
                </label>
                <select
                  type="text"
                  name="sex"
                  className="w-full px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
                >
                  <option>Male</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block font-medium text-sm mb-1">
                  Age Group
                </label>
                <select
                  type="text"
                  name="age"
                  className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
                >
                  <option>18 - 25</option>
                </select>
              </div>
            </div>
          </div>
          <hr className="border border-[#D9D9D9] mt-6 md:hidden block" />
          <div className="md:w-[50%] w-full md:mt-0 mt-[31px]">
            {/* Country city */}
            <div className="flex items-center gap-x-2 mb-[20px]">
              <div className="w-full">
                <label className="block font-medium text-sm mb-1">
                  Country
                </label>
                <select
                  type="text"
                  name="name"
                  className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
                >
                  <option>China</option>
                </select>
              </div>
              <div className="w-full">
                <label className="block font-medium text-sm mb-1">
                  City
                </label>
                <select
                  type="text"
                  name="name"
                  className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
                >
                  <option>Hong Kong</option>
                </select>
              </div>
            </div>
            {/* Your Profession  */}
            <div className="mb-[20px]">
              <label className="block font-medium text-sm mb-1">
                Your Profession
              </label>
              <input
                type="text"
                name="profession"
                className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
                defaultValue="Career, Talent, Academic..."
              />
            </div>
            {/* Introduction  */}
            <div className="mb-[10px]">
              <label className="block font-medium text-sm mb-1">
                Introduction
              </label>
              <textarea
                type="text"
                name="introduction"
                className="w-full px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
                defaultValue="Please include all information relevant to your issue."
              />
            </div>
            {/* Education  */}
            <div>
              <label className="block font-medium text-sm mb-1">
                Education
              </label>
              <input
                type="text"
                name="education"
                className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
                defaultValue="Degree"
              />
            </div>
          </div>

        </div>
        {/* Form mid part */}
        <hr className="border border-[#D9D9D9] mt-8 mb-2 md:mx-0 mx-4" />
        {/* multiple buttons  */}
        <div className="mt-7 mb-11 md:mx-0 mx-4">
          <label className="block font-medium text-sm mb-1">
            Interest
          </label>
          <div className="flex md:flex-nowrap flex-wrap items-center gap-2">
            <button
              className="py-2 px-4 bg-[#1E40AF] text-white font-medium text-sm rounded-md"
            >
              Economy
            </button>
            <button
              className="py-2 px-4 font-medium text-sm border border-[#E2E8F0] rounded-md"
            >
              Jobs
            </button>
            <button
              className="py-2 px-4 font-medium text-sm border border-[#E2E8F0] rounded-md"
            >
              Education
            </button>
            <button
              className="py-2 px-4 font-medium text-sm border border-[#E2E8F0] rounded-md"
            >
              Ehfsabc
            </button>
            <button
              className="py-2 px-4 font-medium text-sm border border-[#E2E8F0] rounded-md"
            >
              Annual
            </button>
            <button
              className="py-2 px-4 bg-[#1E40AF] text-white font-medium text-sm rounded-md"
            >
              Monthly
            </button>
            <button
              className="py-2 px-4 font-medium text-sm border border-[#E2E8F0] rounded-md"
            >
              Kfhee
            </button>
            <button
              className="py-2 px-4 font-medium text-sm border border-[#E2E8F0] rounded-md"
            >
              Annual
            </button>
          </div>
        </div>

        <hr className="border border-[#D9D9D9] mt-8 mb-2 md:mx-0 mx-4" />

        {/* Form bottom part  */}
        <div className="mb-20 mt-7 md:mx-0 mx-4">
          <label className="block font-medium text-sm mb-1">
            Subscription
          </label>
          <div className="md:flex md:flex-row flex-col justify-between items-start gap-x-6 mt-6">
            <div className="md:w-1/2 w-full">
              <div className="flex items-center">
                <div className="w-1/2 text-center px-5 py-4 border-2 border-[#1E40AF] rounded-md mr-4">
                  <p>👁️</p>
                  <p className="mt-3">Basic Member</p>
                </div>
                <div className="w-1/2 text-center px-5 py-4  border-2 border-slate-100 rounded-md">
                  <p>👁️</p>
                  <p className="mt-3">Pro Member</p>
                </div>
              </div>

              <div className="md:hidden block">
                <label className="block font-medium text-sm mb-4 mt-[46px]">
                  Payment
                </label>
                <div className="flex items-center justify-between">
                  <div className="w-1/3 text-center p-4 border-2 border-[#1E40AF] rounded-md">
                    <p>👁️</p>
                    <p className="mt-3">Card</p>
                  </div>
                  <div className="w-1/3 text-center p-4 border-2 border-slate-100 rounded-md">
                    <p>👁️</p>
                    <p className="mt-3">Paypal</p>
                  </div>
                  <div className="w-1/3 text-center p-4 border-2 border-slate-100 rounded-md">
                    <p>👁️</p>
                    <p className="mt-3">Apple</p>
                  </div>
                </div>
              </div>


              <div className="mt-9 md:hidden block">
                <label className="block font-medium text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="First Last"
                  className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
                />
              </div>
              <div className="mt-9">
                <label className="block font-medium text-sm mb-2">
                  Card number
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
                />
              </div>
              <div className="flex items-center mt-9">
                <div className="w-full mr-2">
                  <label className="block font-medium text-sm mb-2">
                    Expires
                  </label>
                  <select
                    type="text"
                    name="expires"
                    className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
                  >
                    <option>Month</option>
                  </select>
                </div>
                <div className="w-full mr-2">
                  <label className="block font-medium text-sm mb-2">
                    Year
                  </label>
                  <select
                    type="text"
                    name="year"
                    className="w-full h-[36px] px-2 py-1 border border-[#E4E4E7] rounded-md shadow outline-none"
                  >
                    <option>Year</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="block font-medium text-sm mb-2">
                    CVC
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    className="w-full h-[36px] px-3 py-1 text-[#71717A] border border-[#E4E4E7] rounded-md shadow outline-none"
                    defaultValue="CVC"
                  />
                </div>
              </div>
            </div>



            <div className="md:w-1/2 w-full md-mt-0 mt-9">
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
          <div className="w-[200px] md:mx-0 mx-auto">
            <button
              type="submit"
              className="w-[200px] h-[36px] py-2 px-5 bg-[#DB2777] text-white rounded-md mt-12"
            >
              Save 👁️
            </button>

          </div>







        </div>







      </form>


    </>
  )
}
