import Row from './Row';
import TableHeader from './TableHeader';

const Table = () => {
  return (
    <div className="rounded border shadow-md overflow-x-scroll no-scrollbar h-screen mt-4 pl-4 pr-2 py-2 bg-gray-100">
      <TableHeader />
      {/* fixed columns */}
      <div>
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};

export default Table;
