import Banner from "../../assets/banner.png";
import Avatar from "../../assets/Avatar.png"
import { FaStar, FaStarHalfStroke, FaArrowTrendUp } from "react-icons/fa6";
import TableRight from "./TableRight";
import TableLeft from "./TableLeft";
import TableCenter from "./TableCenter";

export default function Profile() {
  return (
    <div>
      {/* Banner  */}
      <div
        style={{ backgroundImage: `url(${Banner})` }}
        className="bg-cover bg-center bg-no-repeat h-[301px] sm:h-[250px] relative"
      >
        <div className="flex justify-between ps-6 pr-11 pt-4 sm:ps-4 sm:pr-6">
          <nav className="flex items-center text-white border border-white rounded-md px-2 text-sm">
            <span className="flex items-center">
              Home
              <span className="px-1 text-gray-300">{'>'}</span>
            </span>
            <span>Member</span>
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

      {/* Table Part  */}
      <div className="flex justify-between px-11 mt-11 gap-4">
        <div className="w-[120px]">
          <TableLeft/>
        </div>
        <div className="flx justify-center w-[751px] border rounded-lg px-6 py-4">
          <TableCenter/>
        </div>
        <div className="w-[300px]">
          <TableRight/>
        </div>
      </div>
    </div>
  );
}
