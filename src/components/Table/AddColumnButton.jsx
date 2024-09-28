import { FaPlus } from 'react-icons/fa6';

const AddColumnButton = ({ setTableData, setHeaders }) => {
  const handleAddColumn = () => {
    setTableData((curr) => {
      return curr.map((item) => ({ ...item, columns: [...item.columns, {}] }));
    });
    setHeaders((curr) => [...curr, { isPrimary: false, name: `Variant ${curr.length + 1}` }]);
  };

  return (
    <div className="min-w-48 w-48 text-center py-2 pr-3 pl-6 ">
      <div className={` h-full flex flex-col text-xs gap-1 text-gray-700  justify-center `}>
        <button
          onClick={handleAddColumn}
          className={`outline-none hover:shadow-md  bg-white flex w-fit border py-3 px-3 rounded-md items-center gap-2  text-ellipsis overflow-hidden whitespace-nowrap`}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default AddColumnButton;
