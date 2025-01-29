import { useState } from "react"


export default function ProfileEdit() {
  const [isActive, setIsActive] = useState(false)

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

          
        </form>
      </div>


    </>
  )
}
