import { LuGrip } from 'react-icons/lu';
import AddButton from './Table/AddButton';

const Row = () => {
  return (
    <div className="flex w-full h-40 text-gray-500 font-semibold mb-2">
      {/* Row number and delete button on hover */}
      <div className="min-w-32 px-3 flex items-center justify-end  text-black font-bold text-xl relative bg-red-500">
        <p className="bg-blue-400">1</p>
        <LuGrip className="fill-black" />
      </div>

      {/* Product Filter */}
      <div className="min-w-96  border-x border-gray-300 text-center py-2 pr-3 pl-6 ">
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

      {/* Product variants with scroll  */}
      <div className="flex overflow-x-auto no-scrollbar  ">
        {/* variant with image */}
        <div className="min-w-48 w-48 border-r border-gray-300 text-center py-2 pr-3 pl-6 ">
          <div className="bg-white h-full border-2 border-dashed flex flex-col px-6 py-3 text-[10px] gap-1  text-gray-900 font-medium justify-center ">
            <div className="rounded-md overflow-hidden h-32  ">
              <img
                className="aspect-square"
                src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="product"
              />
            </div>
            <p className="text-md font-bold text-ellipsis overflow-hidden whitespace-nowrap">
              Test image for the image{' '}
            </p>
          </div>
        </div>

        {/* add variant button */}
        <div className="min-w-48 w-48 border-r border-gray-300 text-center py-2 pr-3 pl-6 ">
          <AddButton text={'Add design'} />
        </div>
      </div>
    </div>
  );
};

export default Row;
