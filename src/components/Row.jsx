import { useState } from 'react';
import AddColumnButton from './Table/AddColumnButton';
import ProductFilters from './Table/ProductFilters';
import ProductVariant from './Table/ProductVariant';
import Rownumber from './Table/Rownumber';

const Row = ({ tableData, setTableData, data, rowIndex, setHeaders, dragItem, dragOverItem }) => {
  const [rowHover, setRowHover] = useState(false);

  const handleDragStart = (e, index) => {
    dragItem.current = index;
    setTimeout(() => {
      e.target.style.visibility = 'hidden';
    }, 0);
  };

  const handleDragEnter = (e, index) => {
    dragOverItem.current = index;

    const copyListItems = structuredClone(tableData);

    if (dragItem.current === null) return;

    const dragItemContent = copyListItems[+dragItem.current];
    copyListItems.splice(dragItem.current, 1);

    copyListItems.splice(dragOverItem.current, 0, dragItemContent);

    setTableData(copyListItems);
    dragItem.current = dragOverItem.current;
    dragOverItem.current = null;
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    dragItem.current = null;
    setTimeout(() => {});
    e.target.style.visibility = 'visible';
  };

  return (
    <div
      onMouseEnter={() => setRowHover(true)}
      onMouseLeave={() => setRowHover(false)}
      className="flex w-full h-40 text-gray-500 font-semibold mb-2 "
      draggable
      onDragStart={(e) => handleDragStart(e, rowIndex)}
      onDragEnter={(e) => handleDragEnter(e, rowIndex)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnd={(e) => handleDragEnd(e)}>
      {/* Row number and delete button on hover */}
      <div className="flex sticky left-0 bg-gray-100">
        <Rownumber
          rowHover={rowHover}
          rowIndex={rowIndex}
          setTableData={setTableData}
        />

        {/* Product Filter */}
        <ProductFilters
          tags={data.tags}
          selectedTags={data.selectedTags}
          rowIndex={rowIndex}
          setTableData={setTableData}
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
              rowIndex={rowIndex}
              columnIndex={ind}
              setTableData={setTableData}
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
