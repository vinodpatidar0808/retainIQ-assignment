import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import Backdrop from '../Backdrop';
import SelectDesign from '../SelectDesign';

const AddButton = ({ isProductFilter, text = '' }) => {
  const [openSelectDesign, setOpenSelectDesign] = useState(false);

  const handleAdd = () => {
    setOpenSelectDesign(true);
  };

  const handleClose = () => {
    setOpenSelectDesign(false);
  };

  return (
    <>
      <button
        onClick={handleAdd}
        className={`outline-none hover:shadow-md bg-white flex w-fit border py-3 px-3 rounded-md items-center gap-2  text-ellipsis overflow-hidden whitespace-nowrap `}>
        <FaPlus />
        {text}
      </button>
      <Backdrop isOpen={openSelectDesign} >
        <SelectDesign handleClose={handleClose} />
      </Backdrop>
    </>
  );
};

export default AddButton;
