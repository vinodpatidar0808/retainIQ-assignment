import { useState } from 'react';
import AddColumnButton from './Table/AddColumnButton';
import ProductFilters from './Table/ProductFilters';
import ProductVariant from './Table/ProductVariant';
import Rownumber from './Table/Rownumber';

const Row = ({ tableData, setTableData, data, rowIndex, setHeaders, dragItemRef, dragOverItemRef }) => {
  const [rowHover, setRowHover] = useState(false);

  // sets the current element being draged and hide the element being dragged from ui(dom)
  const handleDragStart = (e, index) => {
    dragItemRef.current = index;
    setTimeout(() => {
      e.target.style.visibility = 'hidden';
    }, 0);
  };

  // updates the table when dragged element enters other element in draggable area.
  const handleDragEnter = (e, index) => {
    dragOverItemRef.current = index;

    const copyListItems = structuredClone(tableData);

    if (dragItemRef.current === null) return;

    const dragItemContent = copyListItems[+dragItemRef.current];
    copyListItems.splice(dragItemRef.current, 1);

    copyListItems.splice(dragOverItemRef.current, 0, dragItemContent);

    setTableData(copyListItems);
    dragItemRef.current = dragOverItemRef.current;
    dragOverItemRef.current = null;
  };

  // Called when dragged element is dropped,
  const handleDragEnd = (e) => {
    e.preventDefault();
    dragItemRef.current = null;
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

      {/* Product variants with scroll: this columns will scroll horizontally whenever needed  */}
      <div className="flex  ">
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

        <AddColumnButton
          setTableData={setTableData}
          setHeaders={setHeaders}
        />
      </div>
    </div>
  );
};

export default Row;
