import { FaPlus } from 'react-icons/fa6';

const AddButton = ({ text = '' }) => {
  return (
    <div
      className={`${
        text ? 'bg-white' : ''
      } h-full border-2 border-dashed flex flex-col items-center px-6 py-3 text-xs gap-1 text-gray-700  justify-center `}>
      <button
        className={`${
          !text ? 'bg-white' : ''
        } flex w-fit border py-3 px-3 rounded-md items-center gap-2  text-ellipsis overflow-hidden whitespace-nowrap`}>
        <FaPlus />
        {text}
      </button>
    </div>
  );
};

export default AddButton;
