import { FaEllipsisVertical } from 'react-icons/fa6';

const TableHeader = () => {
  return (
    <div className="flex w-full  items-center text-gray-500 font-semibold mb-4">
      <div className="w-32 bg-red-400  border-r border-gray-400"></div>
      <div className="w-96 border-r border-gray-300 text-center py-2 pr-3 pl-6">Product Filter</div>
      <div className="flex gap-2  overflow-x-auto no-scrollbar  ">
        <div className="px-2 py-2 flex justify-between items-center min-w-56 border-r border-gray-300">
          <p>Primary Variant</p>
          <FaEllipsisVertical />
        </div>
        <div className="px-2 py-2 flex justify-between items-center min-w-56 border-r border-gray-300">
          <p>Variant 2</p>
          <FaEllipsisVertical />
        </div>
        <div className="px-2 py-2 flex justify-between items-center min-w-56 border-r border-gray-300">
          <p>Variant 3</p>
          <FaEllipsisVertical />
        </div>
      </div>
    </div>
  );
};

export default TableHeader;
