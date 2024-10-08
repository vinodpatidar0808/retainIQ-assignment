import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { getDefaultRowState, showToastMessage } from '../../utils/constants';

const EmptyRow = ({ setTableData, numberOfColumns }) => {
  const [loading, setLoading] = useState(false);

  // This function is used to add a new row in the table, artificial delay is added to show the loading effect
  const handleAddRow = () => {
    setLoading(true);
    // putting timeout to show the loading spinner and effect
    setTimeout(() => {
      setTableData((curr) => [...curr, getDefaultRowState(numberOfColumns)]);
      showToastMessage('SUCCESS', 'Row Added');
      setLoading(false);
    }, 500);
  };
  
  return (
    <div className="sticky left-0 flex w-32 justify-end px-3 h-16 items-center text-xs text-gray-700 ">
      <button
        disabled={loading}
        onClick={handleAddRow}
        className={`outline-none hover:shadow-md  bg-white flex w-fit border py-3 px-3 rounded-md items-center gap-2  text-ellipsis overflow-hidden whitespace-nowrap`}>
        {!loading ? <FaPlus /> : <div className="loader-spinner w-3 "></div>}
      </button>
    </div>
  );
};

export default EmptyRow;
