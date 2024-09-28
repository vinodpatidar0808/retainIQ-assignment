import { FaRegTrashCan } from 'react-icons/fa6';
import { LuGrip } from 'react-icons/lu';

const Rownumber = ({ rowHover }) => {
  const handleRowDelete = () => {
    console.log('delete row ');
  };

  return (
    <div className="min-w-32  px-3 flex items-center justify-end  text-black font-bold text-xl relative ">
      {rowHover && (
        <span
          className="absolute top-11 right-4 cursor-pointer"
          onClick={handleRowDelete}>
          <FaRegTrashCan className="fill-red-500 " />
        </span>
      )}
      <p className="">1</p>
      <LuGrip className="fill-black" />
    </div>
  );
};

export default Rownumber;
