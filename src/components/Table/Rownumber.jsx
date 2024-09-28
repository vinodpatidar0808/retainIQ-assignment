import { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { LuGrip } from 'react-icons/lu';

const Rownumber = () => {
  const [hover, setHover] = useState(false);
  const handleRowDelete = () => {
    console.log('delete row ');
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="min-w-32 px-3 flex items-center justify-end  text-black font-bold text-xl relative ">
      {hover && (
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
