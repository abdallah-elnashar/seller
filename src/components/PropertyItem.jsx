import { BiBed, BiHeart } from "react-icons/bi";
import { MdOutlinePlace } from "react-icons/md";
import { BsArrowsMove } from "react-icons/bs";
import { LiaHotelSolid, LiaBathSolid } from "react-icons/lia";
import image from "../assets/1.jpg";
import { Link } from "react-router-dom";

const PropertyItem = ({ place, country, price, street, id }) => {
  return (
    <Link
      to={`/${id}`}
      className="w-[25%] h-[380px] m-2 flex justify-between  shadow-lg  flex-col bg-slate-100 px-[10px] py-2 rounded-lg"
    >
      {/* image */}
      <div className=" relative mb-2 rounded-lg overflow-hidden">
        <span className=" flex items-center bg-white text-blue-700 rounded-3xl px-2 py-1 font-medium   text-[12px] absolute left-2 top-2">
          For Rent
        </span>
        <div className=" flex items-center justify-center bg-white rounded-full w-[25px] h-[25px] absolute right-2 top-2">
          <span className="block">
            <BiHeart size={16} color="rgb(29, 78 ,216)" />
          </span>
        </div>
        <img src={image} alt="car" />
      </div>
      {/* description */}
      <div className="flex flex-col">
        <p className="flex items-center font-medium gap-1 text-[12px] text-gray-600">
          <span>
            <MdOutlinePlace size={14} color={"rgb(237, 116, 61)"} />
          </span>
          8858 Pecan St.
        </p>
        <h3 className="font-bold w-[80%] text-gray-700">
          {place}-{street}-{country}
        </h3>
      </div>
      {/* specs */}
      <div className="mt-[10px] flex gap-9 items-center">
        <p className="flex flex-col gap-[1px]">
          <span className=" inline-block">
            <LiaHotelSolid color="rgb(92, 90, 90)" />
          </span>
          <span className="inline-block text-[10px] font-medium text-gray-600 ">
            3 Room
          </span>
        </p>
        <p className="flex flex-col gap-[1px]">
          <span className=" inline-block">
            <BiBed color="rgb(92, 90, 90)" />
          </span>
          <span className="inline-block text-[10px] font-medium text-gray-600 ">
            4 Bed
          </span>
        </p>
        <p className="flex flex-col gap-[1px]">
          <span className=" inline-block">
            <LiaBathSolid color="rgb(92, 90, 90)" />
          </span>
          <span className="inline-block text-[10px] font-medium text-gray-600 ">
            1 Bath
          </span>
        </p>
        <p className="flex flex-col gap-[1px]">
          <span className=" inline-block">
            <BsArrowsMove color="rgb(92, 90, 90)" />
          </span>
          <span className="inline-block text-[10px] font-medium text-gray-600 ">
            732 sft
          </span>
        </p>
      </div>
      {/* Price */}
      <div className="flex justify-between items-center mt-4">
        <p className=" text-blue-700">
          ${price}
          <span className="text-[10px] text-gray-700 font-medium">/month</span>
        </p>
        <button className="px-2 py-1 text-blue-700 font-bold rounded-3xl border border-blue-700 text-[14px]">
          Read More
        </button>
      </div>
    </Link>
  );
};

export default PropertyItem;
