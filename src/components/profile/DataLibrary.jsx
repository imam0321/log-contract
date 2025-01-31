

export default function DataLibrary() {
  return (
    <>
      <div className="mt-4 ms-6 mr-8">
        <nav
          className="flex items-center w-[18%] h-[24px] text-sm border border-[#E9E9EB] rounded-md px-2 py-2"
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
      </div>


    </>
  )
}
