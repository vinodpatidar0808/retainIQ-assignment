import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { showToastMessage } from '../../utils/constants';
import Backdrop from '../Backdrop';
import SelectDesign from '../SelectDesign';

const AddButton = ({ rowIndex, columnIndex, setTableData, text = '' }) => {
  const [openSelectDesign, setOpenSelectDesign] = useState(false);

  const handleOpen = () => {
    setOpenSelectDesign(true);
  };

  const handleClose = () => {
    setOpenSelectDesign(false);
  };

  const handleAddVariant = (item) => {
    setTableData((curr) => {
      let tempArray = structuredClone(curr);
      tempArray[rowIndex].columns[columnIndex] = item;
      return tempArray;
    });
    showToastMessage('SUCCESS', 'Variant Template Updated');
    handleClose();
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`outline-none hover:shadow-md bg-white flex w-fit border py-3 px-3 rounded-md items-center gap-2  text-ellipsis overflow-hidden whitespace-nowrap `}>
        <FaPlus />
        {text}
      </button>
      <Backdrop isOpen={openSelectDesign}>
        <SelectDesign
          handleAddDesign={handleAddVariant}
          handleClose={handleClose}
        />
      </Backdrop>
    </>
  );
};

export default AddButton;
