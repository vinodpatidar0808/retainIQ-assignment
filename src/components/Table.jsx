import { useRef, useState } from 'react';
import { initialTableState } from '../utils/constants';
import Row from './Row';
import EmptyRow from './Table/EmptyRow';
import TableHeader from './TableHeader';

const Table = () => {
  const [tableData, setTableData] = useState(initialTableState);
  const [headers, setHeaders] = useState([{ isPrimary: true, name: 'Primary Variant' }]);
  const dragItemRef = useRef(null); // holds element being dragged
  const dragOverItemRef = useRef(null); // holds element being dragged over

  return (
    <div className="rounded border shadow-md overflow-x-scroll no-scrollbar h-screen mt-4 pl-4 pr-2 py-2 bg-gray-100">
      {/* Table Header */}
      <TableHeader
        headers={headers}
        setHeaders={setHeaders}
        setTableData={setTableData}
      />

      {/*Table Rows */}
      {tableData.map((data, index) => (
        <Row
          tableData={tableData}
          key={index}
          rowIndex={index}
          headers={headers}
          setHeaders={setHeaders}
          data={data}
          setTableData={setTableData}
          dragItemRef={dragItemRef}
          dragOverItemRef={dragOverItemRef}
        />
      ))}
      <EmptyRow
        setTableData={setTableData}
        numberOfColumns={headers.length}
      />
    </div>
  );
};

export default Table;
