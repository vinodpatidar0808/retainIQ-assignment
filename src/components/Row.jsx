import { useRef, useState } from 'react';
import AddColumnButton from './Table/AddColumnButton';
import ProductFilters from './Table/ProductFilters';
import ProductVariant from './Table/ProductVariant';
import Rownumber from './Table/Rownumber';

const Row = ({ tableData, setTableData, data, rowIndex, setHeaders }) => {
  console.log('tableData:', tableData);
  console.log('data: ', data);
  const [rowHover, setRowHover] = useState(false);
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);
  console.log('outside: dragItem, dragOverItem', dragItem.current, dragOverItem.current);

  const handleDragStart = (e, index) => {
    console.log('e: ', e);
    dragItem.current = index;
    // setTimeout(() => {
    //   e.target.style.visibility = 'hidden';
    // }, 0);
  };

  const handleDragEnter = async (e, index) => {
    dragOverItem.current = index;
    // console.log('dragItem, dragOverItem ', dragItem.current, dragOverItem.current);

    const copyListItems = structuredClone(tableData);
    // console.log('copyListItems: ', copyListItems);

    if (dragItem.current === null) return;

    const dragItemContent = copyListItems[dragItem.current];

    await copyListItems.splice(dragItem.current, 1);

    await copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    // console.log('copyListItems');

    setTableData(copyListItems);
    // setTimeout(() => {
    //   dragItem.current = dragOverItem.current;
    //   dragOverItem.current = null;
    // }, 0);
  };

  // const handleDragEnd = (e, index) => {
  //   console.log('dragEnd');
  //   e.preventDefault();
  //   // dragItem.current = null;
  //   setTimeout(() => {});
  //   e.target.style.visibility = 'visible';
  //   // setRefresh(curr => curr + 1)
  // };

  return (
    <div
      onMouseEnter={() => setRowHover(true)}
      onMouseLeave={() => setRowHover(false)}
      className="flex w-full h-40 text-gray-500 font-semibold mb-2 "
      draggable
      onDragStart={(e) => handleDragStart(e, rowIndex)}
      onDragEnter={(e) => handleDragEnter(e, rowIndex)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnd={(e) => e.preventDefault()}>
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
