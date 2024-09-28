import { useState } from 'react';
import Row from './Row';
import TableHeader from './TableHeader';
import EmptyRow from "./Table/EmptyRow";

const Table = () => {
  const [tableData, setTableData] = useState([{type: "EMPTY"}]);
  const [headers, setHeaders] = useState([{ isPrimary: true, name: 'Primary Variant' }]);

  return (
    <div className="rounded border shadow-md overflow-x-scroll no-scrollbar h-screen mt-4 pl-4 pr-2 py-2 bg-gray-100">
      {/* Table Header */}
      <TableHeader
        headers={headers}
        setHeaders={setHeaders}
      />

      {/* Rows */}
      <Row
        headers={headers}
        setHeaders={setHeaders}
      />
      <EmptyRow />
    </div>
  );
};

export default Table;
