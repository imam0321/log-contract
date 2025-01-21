import { useState } from "react";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="lg:block hidden mb-11">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sequi impedit aperiam sunt, minus, repellendus quae quod modi quos quo expedita quaerat veniam cumque natus quasi voluptatem nobis ipsa vel.
      </p>
      <div className="md:w-1/2 w-5/6 mx-auto mt-4">
        <h2 className="text-2xl font-semibold my-2">We look forward to hearing from you!</h2>
        <h3 className="text-gray-500 mb-2">
          Please reach out through the contact form below, and we’ll respond promptly.
        </h3>
        <form className="md:w-3/5">
          <div className="mb-1">
            <input
              type="text"
              name="about"
              className="md:w-[49%] w-2/5 px-2 py-2 border-2 border-gray-200 rounded-md mr-2"
              placeholder="About"
            />

            <div className="relative inline-block md:w-[49%] w-1/2 text-left">
              <button
                type="button"
                onClick={toggleDropdown}
                className="flex items-center justify-between w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded shadow-sm"
              >
                Topic
                <svg
                  className="w-4 h-4 ml-2 -mr-1 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded shadow-lg">
                  <p
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Option 1
                  </p>
                  <p
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Option 2
                  </p>
                  <p
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Option 3
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mb-1">
            <label className="block text-gray-700 font-bold">
              Email *
            </label>
            <p className="text-gray-500 my-1">
              This is your public display name.
            </p>
            <input
              type="email"
              name="email"
              className="w-full px-2 py-2 border-2 border-gray-200 rounded-md"
              placeholder="Email"
            />
          </div>

          <div className="mb-1">
            <label className="block text-gray-700 font-bold mb-1">
              Your Messages
            </label>
            <textarea
              name="messages"
              className="w-full px-2 py-2 border-2 border-gray-200 rounded-md"
              placeholder="Type your message here"
            />
            <p className="text-gray-500">
              Your message will be copied to the support team.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="md:w-1/5 w-full py-2 px-5 bg-blue-700 text-white font-semibold rounded-md mt-6"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
