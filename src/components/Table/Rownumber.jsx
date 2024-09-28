import { FaRegTrashCan } from 'react-icons/fa6';
import { LuGrip } from 'react-icons/lu';
import { initialTableState } from '../../utils/constants';

const Rownumber = ({ setTableData, rowIndex, rowHover }) => {
  const handleRowDelete = (index) => {
    setTableData((curr) => {
      if (curr.length === 1) {
        return initialTableState;
      }
      let tempArray = [...curr];
      tempArray.splice(index, 1);
      return tempArray;
    });
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
    </div>
  );
};

export default Rownumber;
