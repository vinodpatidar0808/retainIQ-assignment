import { useState } from 'react';
import { FaEllipsisVertical, FaRegTrashCan } from 'react-icons/fa6';

const TableHeader = ({ headers, setHeaders }) => {
  const [hover, setHover] = useState(false);
  const handleColumnDelete = () => {
    console.log('delete column');
  };
  return (
    <div className="flex w-full  items-center text-gray-500 font-semibold mb-4">
      <div className="flex sticky left-0 bg-gray-100">
        <div className="min-w-32 sticky left-0   border-gray-400"></div>
        <div className="min-w-96 sticky left-0 border-r border-gray-300 text-center py-2 pr-3 pl-6">
          Product Filter
        </div>
      </div>

      <div className="flex overflow-x-auto no-scrollbar  ">
        <div className="pr-3 pl-6 py-2 flex justify-between items-center min-w-48 border-r border-gray-300">
          <p>Primary Variant</p>
          <FaEllipsisVertical />
        </div>

        {headers?.map((header, index) => {
          return !header.isPrimary ? (
            <div
              key={`${header.name}-${index}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="pr-3 pl-6 py-2 flex justify-between items-center min-w-48 border-r border-gray-300">
              <p>{header.name}</p>
              <div className="flex gap-2">
                {hover && (
                  <span
                    className=" cursor-pointer"
                    onClick={handleColumnDelete}>
                    <FaRegTrashCan className="fill-red-500 " />
                  </span>
                )}
                <FaEllipsisVertical />
              </div>
            </div>
          ) : null;
        })}

        {/* <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="pr-3 pl-6 py-2 flex justify-between items-center min-w-48 border-r border-gray-300">
          <p>Variant 2</p>
          <div className="flex gap-2">
            {hover && (
              <span
                className=" cursor-pointer"
                onClick={handleColumnDelete}>
                <FaRegTrashCan className="fill-red-500 " />
              </span>
            )}
            <FaEllipsisVertical />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TableHeader;
