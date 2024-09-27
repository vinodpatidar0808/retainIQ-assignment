import { LuGrip } from 'react-icons/lu';

const Row = () => {
  return (
    <div className="flex w-full h-48 text-gray-500 font-semibold mb-2">
      <div className="w-32 px-3 flex items-center justify-end  gap-2 text-black  font-bold ">
        <p>1</p>
        <LuGrip className="fill-black" />
      </div>

      <div className="w-96  border-x border-gray-300 text-center py-2 pr-3 pl-6 ">
        <div className="bg-white h-full border-2 border-dashed flex flex-wrap py-4 px-2 text-[10px] gap-2  text-gray-900 font-medium items-center justify-center">
          <p className={`border rounded-md px-1 py-1 `}>Product Collection</p>
          <p
            className={`border rounded-md px-1 py-1 ${
              true ? 'bg-green-100 text-green-700 border-green-300' : ''
            }`}>
            Contains
          </p>
          <p className={`border rounded-md px-1 py-1`}>Anarkali Kurtas</p>
        </div>
      </div>

      <div className="flex overflow-x-auto no-scrollbar  ">
        <div className="w-56 border-r border-gray-300 text-center py-2 pr-3 pl-6 ">
          <div className="bg-white h-full border-2 border-dashed flex flex-wrap py-4 px-2 text-[10px] gap-2  text-gray-900 font-medium items-center justify-center">
            <p className={`border rounded-md px-1 py-1 `}>Product Collection</p>
            <p
              className={`border rounded-md px-1 py-1 ${
                true ? 'bg-green-100 text-green-700 border-green-300' : ''
              }`}>
              Contains
            </p>
            <p className={`border rounded-md px-1 py-1`}>Anarkali Kurtas</p>
          </div>
        </div>


        {/* <div className="pr-3">
          <div className="pr-3 pl-6 flex justify-between items-center w-56 h-full bg-white border-r border-gray-300"></div>
        </div>
        <div className="px-2 py-2 flex justify-between items-center min-w-56 border-r border-gray-300">
          <p>Variant 2</p>
          <FaEllipsisVertical />
        </div>
        <div className="px-2 py-2 flex justify-between items-center min-w-56 border-r border-gray-300">
          <p>Variant 3</p>
          <FaEllipsisVertical />
        </div> */}
      </div>
    </div>
  );
};

export default Row;
