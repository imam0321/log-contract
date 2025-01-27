import { FaPlus } from "react-icons/fa6";


export default function TableCenter() {
  return (
    <div className="p-4">
      {/* New Article */}
      <div className="mb-1">
        <h1 className="mb-1">Create a New Article</h1>
        <div className="flex items-center">
          <input
            type="text"
            className="rounded-lg border w-[580px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Title of your new Article"
          />
          <button className="px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600">
            Create
          </button>
        </div>
      </div>

      {/* Articles  */}
      <div className="mb-1">
        <h1 className="mb-1">My Articles</h1>
        <div className="relative flex items-center">
          <input
            type="text"
            className="rounded-lg border w-[660px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="All Topics"
          />
          <span className="absolute right-4 top-3">
            <svg
              className="w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="w-[660px] flex justify-between items-center">
        <div className="flex items-center gap-x-1">
          <input type="text" className="rounded-lg border w-[200px] px-4 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Filter articles..." />
          <button className="flex items-center gap-x-2 px-2 border border-dashed rounded-md border-gray-500">
            <FaPlus className="border border-black rounded-full" />
            Status
          </button>

          <button className="flex items-center gap-x-2 px-2 border border-dashed rounded-md border-gray-500">
            <FaPlus className="border border-black rounded-full" />
            Priority
          </button>
        </div>
        <button className="flex items-center gap-x-2 px-2 border rounded-md border-gray-400">
          <FaPlus className="border border-black rounded-full" />
          View
        </button>
      </div>
    </div>
  );
}
