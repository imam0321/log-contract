import Banner from "../../assets/banner.png";
import Avatar from "../../assets/Avatar.png"
import { FaStar, FaStarHalfStroke, FaArrowTrendUp, FaPlus, FaRegClone, FaDollarSign, FaChartBar, FaEye, FaBell } from "react-icons/fa6";
import QRcode from "../../assets/qrcode.png"
import Picture from "../../assets/29 9.png"
import RightBgImage from "../../assets/rightBgImage.jpg"
import { FaFileAlt } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="">
      {/* Banner  */}
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className="bg-cover bg-center bg-no-repeat w-full relative md:block hidden"
      >
        <div className="flex justify-between md:ps-6 md:pr-11 pt-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center text-sm border border-white rounded-md px-2"
          >
            <ol className="flex items-center space-x-1 text-white">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <span className="px-1 text-gray-300">{'>'}</span>
              </li>
              <li>
                <a href="/member" className="hover:underline">
                  Member
                </a>
              </li>
            </ol>
          </nav>

          <div className="text-white text-right">
            <h1 className="text-2xl sm:text-xl">Creator Rankings</h1>
            <div className="flex items-center justify-end">
              <p className="mr-1">
                #
                <span className="text-2xl font-semibold">89</span>
              </p>
              <FaArrowTrendUp />
            </div>
          </div>
        </div>

        <div className="flex text-white items-center gap-x-7">
          <img src={Avatar} className="h-[203px] w-[203px] border-4 border-white rounded-full ms-12" alt="" />
          <div className="w-[248px]">
            <h1 className="text-2xl">Murasaki</h1>
            <div className="flex items-center text-yellow-500 my-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            <p className="text-sm">Statistician and author in political forecasting and data analysis.</p>
          </div>
        </div>
      </div>

      <div className="max:w-full flex md:flex-row flex-col-reverse justify-between md:mx-11 mx-auto md:my-11 my-2">
        {/* Left Sidebar  */}
        <div className="w-[10%] md:block hidden">
          <h3 className="font-semibold">Setting</h3>
          <ul className="pt-2">
            <li><span className="font-light pr-1">✓</span>Dashboard</li>
            <li><span className="font-light pr-4">{" "}</span>Profile</li>
            <li><span className="font-light pr-4">{" "}</span>Notifications</li>
            <li><span className="font-light pr-4">{" "}</span>Display</li>
          </ul>
        </div>

        <div className="flx justify-center max:w-[70%] border rounded-lg px-6 py-4 md:block hidden">

          {/* Table part  */}
          <div className="p-4">
            {/* New Article */}
            <div className="mb-1">
              <h1 className="mb-1">Create a New Article</h1>
              <div className="flex items-center">
                <input
                  type="text"
                  className="rounded-lg border w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
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
                  className="rounded-lg border w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
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

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-1">
                <input type="text" className="rounded-lg border w-[30%] px-4 py-1 focus:outline-none focus:ring-2 focus:ring-gray-400" placeholder="Filter articles..." />
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
        </div>
        <div className="max:w-[20%] md:-mt-32 z-40">

          <div className="">
            {/* Right Top */}
            <div style={{ backgroundImage: `url(${RightBgImage})` }} className="bg-cover bg-center bg-no-repeat px-4 py-1 bg-gradient-to-t rounded-xl mx-auto">
              <ul className="flex justify-between items-center text-sm px-3 py-1 rounded-lg bg-white mt-2 md:hidden">
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Notifications</li>
                <li>Display</li>
              </ul>
              <div className="my-6">
                <img src={QRcode} className="mx-auto" alt="" />
                <div className="flex justify-evenly items-center text-white my-2">
                  <p>ID</p>
                  <p>murasaki</p>
                  <FaRegClone className="text-black" />
                </div>

                <div className="md:block grid grid-cols-2 gap-2">
                  <div className="w-full md:h-[126px] h-[120px] bg-white md:p-6 p-4 rounded-lg mx-auto md:mb-2" >
                    <div className="m-auto">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm">Total Revenue</h2>
                        <FaDollarSign className="text-blue-800 font-light" />
                      </div>
                      <h1 className="md:text-4xl text-xl font-bold md:my-1 my-2">45,231 T</h1>
                      <p className="text-gray-500 md:text-md text-xs">+68% from last month</p>
                    </div>
                  </div>
                  <div className="w-full md:h-[126px] h-[120px] bg-white md:p-6 p-4 rounded-lg mx-auto md:mb-2" >
                    <div className="m-auto">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm">Ranking</h2>
                        <FaChartBar className="text-blue-800 font-light" />
                      </div>
                      <h1 className="md:text-4xl text-xl font-bold md:my-1 my-2">89</h1>
                      <p className="text-gray-500 md:text-md text-xs">Last ranking was 160</p>
                    </div>
                  </div>
                  <div className="w-full md:h-[126px] h-[120px] bg-white md:p-6 p-4 rounded-lg mx-auto md:mb-2" >
                    <div className="m-auto">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm">Views</h2>
                        <FaEye className="text-blue-800 font-light" />
                      </div>
                      <h1 className="md:text-4xl text-xl font-bold md:my-1 my-2">2,350</h1>
                      <p className="text-gray-500 md:text-md text-xs">+180.1% from last month</p>
                    </div>
                  </div>
                  <div className="w-full md:h-[126px] h-[120px] bg-white md:p-6 p-4 rounded-lg mx-auto md:mb-2" >
                    <div className="m-auto">
                      <div className="flex justify-between items-center">
                        <h2 className="text-sm">Articles</h2>
                        <FaFileAlt className="text-blue-800 font-light" />
                      </div>
                      <h1 className="md:text-4xl text-xl font-bold md:my-1 my-2">28</h1>
                      <p className="text-gray-500 md:text-md text-xs">+50% from last month</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* show mobile view All Articles start*/}
            <div className="md:hidden block">
              <div className="flex justify-between my-2">
                <h1 className="text-2xl font-semibold ms-3">
                  <span className="text-pink-500">All</span>{" "}
                  <span className="text-blue-600">Articles</span>
                </h1>
                <button className="px-2 py-1 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 mr-2">
                  Create
                </button>
              </div>

              <div>
                <div className="flex justify-between items-start space-x-4 mx-4 my-1">
                  <h2 className="">1</h2>
                  <p className="text-sm">
                    Global Economic Growth Projected to Slow in 2024 Amid Rising Inflation Concerns
                  </p>
                  <p className="text-blue-600">1,280</p>
                </div>
                <div className="flex justify-between items-start space-x-4 mx-4 my-1">
                  <h2 className="">2</h2>
                  <p className="text-sm">
                    Job Creation Surges as Companies Invest in AI and Automation
                  </p>
                  <p className="text-blue-600">532</p>
                </div>
                <div className="flex justify-between items-start space-x-4 mx-4 my-1">
                  <h2 className="">3</h2>
                  <p className="text-sm">
                    Interest Rate Hikes Anticipated in Early 2024
                  </p>
                  <p className="text-blue-600">488</p>
                </div>
                <div className="flex justify-between items-start space-x-4 mx-4 my-1">
                  <h2 className="">4</h2>
                  <p className="text-sm">
                    Green Economy Gains Momentum in 2024
                  </p>
                  <p className="text-blue-600">258</p>
                </div>
              </div>
            </div>
            {/* show mobile view All Articles start*/}

            {/* Right bottom */}
            <div className="w-full p-6 mx-auto bottom-0">
              {/* show mobile view  start*/}
              <h1 className="text-2xl font-semibold mb-4 -ms-3 md:hidden block">
                <span className="text-pink-500">My</span>{" "}
                <span className="text-blue-600">Friends</span>
              </h1>
              {/* show mobile view  start*/}
              <h2 className="text-gray-500 font-bold mb-3">Readers</h2>
              <div className="">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-3">
                    <img src={Picture} alt={Picture} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-800">Sindy Rheaume</p>
                      <p className="text-gray-500 text-sm">150T • 10 horas</p>
                    </div>
                  </div>
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                    <FaBell className="text-blue-500" />
                  </button>
                </div>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-3">
                    <img src={Picture} alt={Picture} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-800">Sindy Rheaume</p>
                      <p className="text-gray-500 text-sm">150T • 10 horas</p>
                    </div>
                  </div>
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                    <FaBell className="text-blue-500" />
                  </button >
                </div >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-3">
                    <img src={Picture} alt={Picture} className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="font-semibold text-gray-800">Sindy Rheaume</p>
                      <p className="text-gray-500 text-sm">150T • 10 horas</p>
                    </div>
                  </div >
                  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                    <FaBell className="text-blue-500" />
                  </button >
                </div >
              </div >
            </div >
          </div >


        </div >
      </div >
    </div >

  );
}


