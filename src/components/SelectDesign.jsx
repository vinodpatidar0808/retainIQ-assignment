import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { CiImageOn } from 'react-icons/ci';
import { FaPlus } from 'react-icons/fa6';
import { sampleData } from './../utils/constants';

const SelectDesign = ({ handleAddDesign, handleClose }) => {
  const [hover, setHover] = useState(null);
  
  return (
    <div className="bg-white rounded-md w-1/2 h-4/5 relative overflow-hidden ">
      {/* image icon + title */}
      <FaPlus
        className="absolute top-2 right-7 rotate-45 w-4 h-4 fill-gray-600 cursor-pointer"
        onClick={handleClose}
      />

      {/* iamge icon */}
      <div>
        <CiImageOn className="fill-green-500 w-8 h-8 " />
      </div>

      {/* title and search component */}
      <div className="flex justify-between px-8 py-4">
        <p className="font-bold text-lg">Select a Design to link</p>
        <div className="flex border border-gray-400 items-center  gap-1 px-2 py-2 rounded-md">
          <BiSearch />
          <input
            type="search"
            placeholder="Search"
            className="w-full outline-none bg-transparent text-gray-600"
          />
        </div>
      </div>

      {/* border */}
      <div className="h-[1px] w-full bg-gray-300" />

      {/* images */}
      <div className="flex h-full gap-2 flex-wrap overflow-hidden overflow-y-auto relative px-8 py-4 pb-28">
        {sampleData.map((item, index) => (
          <div
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover(null)}
            key={index}
            className="relative flex flex-col w-36 hover:shadow-md hover:border rounded-md hover:border-green-600 px-1 py-1">
            {hover === item.id && (
              <button
                onClick={() => handleAddDesign(item)}
                className="text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-200 px-2 py-2 rounded-md">
                Insert
              </button>
            )}
            <div className="overflow-hidden rounded-md">
              <img
                src={item.url}
                alt="image"
                className="aspect-square"
              />
            </div>
            <p className="text-left text-[10px] text-gray-900">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectDesign;
