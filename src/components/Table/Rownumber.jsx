import { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { LuGrip } from 'react-icons/lu';
import { initialTableState, showToastMessage } from '../../utils/constants';
import Backdrop from '../Backdrop';

const Rownumber = ({ setTableData, rowIndex, rowHover }) => {
  const [loading, setLoading] = useState(false);
  const handleRowDelete = (index) => {
    setLoading(true);
    // putting timeout to show the loading spinner and effect to the user
    setTimeout(() => {
      setTableData((curr) => {
        if (curr.length === 1) {
          return initialTableState;
        }
        let tempArray = [...curr];
        tempArray.splice(index, 1);
        return tempArray;
      });
      showToastMessage('SUCCESS', 'Row Deleted');
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-w-32  px-3 flex items-center justify-end  text-black font-bold text-xl relative ">
      {rowHover && (
        <span
          className="absolute top-11 right-4 cursor-pointer"
          onClick={() => handleRowDelete(rowIndex)}>
          <FaRegTrashCan className="fill-red-500 " />
        </span>
      )}
      <p className="">{rowIndex + 1}</p>
      <LuGrip className="fill-black cursor-grab" />
      <Backdrop isOpen={loading}>
        <div className="loader-dots"></div>
      </Backdrop>
    </div>
  );
};

export default Rownumber;
