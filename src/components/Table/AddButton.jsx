import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { showToastMessage } from '../../utils/constants';
import Backdrop from '../Backdrop';
import SelectDesign from '../SelectDesign';
import AddTags from './AddTags';

const AddButton = ({ type, rowIndex, columnIndex, setTableData, text = '', handleAddTags }) => {
  const [openSelectDesign, setOpenSelectDesign] = useState(false);

  // opens backdrop with elible child component
  const handleOpen = () => {
    setOpenSelectDesign(true);
  };

  // closes the backdrop,
  const handleClose = () => {
    setOpenSelectDesign(false);
  };

  // Add design variant for the selected variant type
  // todo: move to top level, for edit flow, if time permits.
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
        {!(type === 'filters') ? (
          <SelectDesign
            handleAddDesign={handleAddVariant}
            handleClose={handleClose}
          />
        ) : (
          <AddTags handleAddTags={handleAddTags} />
        )}
      </Backdrop>
    </>
  );
};

export default AddButton;
