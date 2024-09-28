import { useState } from 'react';
import AddColumnButton from './Table/AddColumnButton';
import ProductFilters from './Table/ProductFilters';
import ProductVariant from './Table/ProductVariant';
import Rownumber from './Table/Rownumber';

const Row = ({ setTableData, data, rownumber, setHeaders }) => {
  const [rowHover, setRowHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setRowHover(true)}
      onMouseLeave={() => setRowHover(false)}
      className="flex w-full h-40 text-gray-500 font-semibold mb-2 ">
      {/* Row number and delete button on hover */}
      <div className="flex sticky left-0 bg-gray-100">
        <Rownumber
          rowHover={rowHover}
          rownumber={rownumber}
          setTableData={setTableData}
        />

        {/* Product Filter */}
        <ProductFilters
          tags={data.tags}
          selectedTags={data.selectedTags}
        />
      </div>

      {/* Product variants with scroll  */}
      <div className="flex  ">
        {/* <ProductVariant isEmpty={false} /> */}
        {data?.columns?.map((item, ind) => {
          return (
            <ProductVariant
              isEmpty={!item.url}
              url={item.url}
              title={item.title}
              key={ind}
            />
          );
        })}
        {/* <ProductVariant isEmpty={true} /> */}
        {/* <ProductVariant /> */}

        <AddColumnButton
          setTableData={setTableData}
          setHeaders={setHeaders}
        />
      </div>
    </div>
  );
};

export default Row;
