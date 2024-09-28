import { useState } from 'react';
import { initialTableState } from '../utils/constants';
import Row from './Row';
import EmptyRow from './Table/EmptyRow';
import TableHeader from './TableHeader';

const Table = () => {
  const [tableData, setTableData] = useState(initialTableState);
  const [headers, setHeaders] = useState([{ isPrimary: true, name: 'Primary Variant' }]);

  return (
    <div className="rounded border shadow-md overflow-x-scroll no-scrollbar h-screen mt-4 pl-4 pr-2 py-2 bg-gray-100">
      {/* Table Header */}
      <TableHeader
        headers={headers}
        setHeaders={setHeaders}
        setTableData={setTableData}
      />

      {/* Rows */}
      {tableData.map((data, index) => (
        <Row
          key={index}
          rownumber={index + 1}
          headers={headers}
          setHeaders={setHeaders}
          data={data}
          setTableData={setTableData}
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
