import { useState } from 'react';
import AddColumnButton from './Table/AddColumnButton';
import ProductFilters from './Table/ProductFilters';
import ProductVariant from './Table/ProductVariant';
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

      {/* Product variants with scroll  */}
      <div className="flex  ">
        {/* <ProductVariant isEmpty={false} /> */}
        <ProductVariant isEmpty={true} />
        <ProductVariant />

        <AddColumnButton setHeaders={setHeaders} />
      </div>
    </div>
  );
};

export default Row;
