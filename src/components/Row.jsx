import { useState } from 'react';
import AddButton from './Table/AddButton';
import AddColumnButton from './Table/AddColumnButton';
import ProductFilters from './Table/ProductFilters';
import Rownumber from './Table/Rownumber';

const Row = ({ setHeaders }) => {
  const [rowHover, setRowHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setRowHover(true)}
      onMouseLeave={() => setRowHover(false)}
      className="flex w-full h-40 text-gray-500 font-semibold mb-2 ">
      {/* Row number and delete button on hover */}
      <div className="flex sticky left-0 bg-gray-100">
        <Rownumber rowHover={rowHover} />

        {/* Product Filter */}
        <ProductFilters />
      </div>
      {/* <AddButton text="Product filters"/> */}

      {/* Product variants with scroll  */}
      <div className="flex  ">
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
        <AddColumnButton setHeaders={setHeaders} />
        {/* <div className="min-w-48 w-48 text-center py-2 pr-3 pl-6 ">
          <AddButton />
        </div> */}
      </div>
    </div>
  );
};

export default Row;
