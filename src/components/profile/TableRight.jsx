import QRcode from "../../assets/qrcode.png"
// import avatar from "../../assets/29 9.png"
import { FaRegClone, FaDollarSign, FaChartBar, FaEye, FaFileAlt, FaSyncAlt } from "react-icons/fa";


export default function TableRight() {
  return (
    <div className="">
      <div className="h-[810px] px-5 bg-gradient-to-t from-blue-600 to-pink-600 rounded-xl absolute top-44 mx-auto">
        <div className="my-6">
          <img src={QRcode} className="mx-auto" alt="" />
          <div className="flex justify-evenly items-center text-white my-2">
            <p>ID</p>
            <p>murasaki</p>
            <FaRegClone className="text-black" />
          </div>

          <div className="">
            <div className="w-[250px] h-[126px] bg-white p-6 rounded-lg mx-auto mb-2" >
              <div className="m-auto">
                <div className="flex justify-between items-center">
                  <h2>Total Revenue</h2>
                  <FaDollarSign className="text-blue-800 font-light" />
                </div>
                <h1 className="text-4xl font-bold">45,231 T</h1>
                <p className="text-gray-500">+68% from last month</p>
              </div>
            </div>
            <div className="w-[250px] h-[126px] bg-white p-6 rounded-lg mx-auto mb-2" >
              <div className="m-auto">
                <div className="flex justify-between items-center">
                  <h2>Ranking</h2>
                  <FaChartBar className="text-blue-800 font-light" />
                </div>
                <h1 className="text-4xl font-bold">89</h1>
                <p className="text-gray-500">Last ranking was 160</p>
              </div>
            </div>
            <div className="w-[250px] h-[126px] bg-white p-6 rounded-lg mx-auto mb-2" >
              <div className="m-auto">
                <div className="flex justify-between items-center">
                  <h2>Views</h2>
                  <FaEye className="text-blue-800 font-light" />
                </div>
                <h1 className="text-4xl font-bold">2,350</h1>
                <p className="text-gray-500">+180.1% from last month</p>
              </div>
            </div>
            <div className="w-[250px] h-[126px] bg-white p-6 rounded-lg mx-auto mb-2" >
              <div className="m-auto">
                <div className="flex justify-between items-center">
                  <h2>Articles</h2>
                  <FaFileAlt className="text-blue-800 font-light" />
                </div>
                <h1 className="text-4xl font-bold">28</h1>
                <p className="text-gray-500">+50% from last month</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <div className="w-[300px] p-6 mx-auto bottom-0">
        <h2 className="text-gray-600 font-bold mb-3">Readers</h2>
        <div className="space-y-1">
          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <img src={avatar} alt={avatar} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Sindy Rheaume</p>
                <p className="text-gray-500 text-sm">150T • 10 horas</p>
              </div>
            </div>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaSyncAlt className="text-blue-500" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <img src={avatar} alt={avatar} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Sindy Rheaume</p>
                <p className="text-gray-500 text-sm">150T • 10 horas</p>
              </div>
            </div>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaSyncAlt className="text-blue-500" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <img src={avatar} alt={avatar} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Sindy Rheaume</p>
                <p className="text-gray-500 text-sm">150T • 10 horas</p>
              </div>
            </div>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaSyncAlt className="text-blue-500" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <img src={avatar} alt={avatar} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">Sindy Rheaume</p>
                <p className="text-gray-500 text-sm">150T • 10 horas</p>
              </div>
            </div>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaSyncAlt className="text-blue-500" />
            </button>
          </div>

        </div>
      </div> */}

    </div>
  )
}
