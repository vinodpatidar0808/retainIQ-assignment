import { FaPlus } from 'react-icons/fa6';
import { getDefaultRowState } from '../../utils/constants';

const EmptyRow = ({ setTableData, numberOfColumns }) => {
  const handleAddRow = () => {
    setTableData((curr) => [...curr, getDefaultRowState(numberOfColumns)]);
  };
  return (
    <div className="sticky left-0 flex w-32 justify-end px-3 h-16 items-center text-xs text-gray-700 ">
      <button
        onClick={handleAddRow}
        className={`outline-none hover:shadow-md  bg-white flex w-fit border py-3 px-3 rounded-md items-center gap-2  text-ellipsis overflow-hidden whitespace-nowrap`}>
        <FaPlus />
      </button>
    </div>
  );
};

export default EmptyRow;
