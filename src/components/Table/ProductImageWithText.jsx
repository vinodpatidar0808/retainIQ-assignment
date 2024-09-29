import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';


const ProductImageWithText = ({handleDeleteVariant, imgUrl, title }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="rounded-md overflow-hidden h-32 relative ">
        <img
          className="aspect-square"
          src={imgUrl}
          alt="product"
        />

        {hover && (
          <div className="flex items-center gap-2  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2  rounded-md bg-white ">
            <FiEdit className=" w-4 h-4 cursor-pointer " />
            <FaRegTrashCan onClick={handleDeleteVariant} className="w-4 h-4 fill-red-600 cursor-pointer" />
          </div>
        )}
      </div>
      <p className="text-md font-bold text-ellipsis overflow-hidden whitespace-nowrap">{title}</p>
    </>
  );
};

export default ProductImageWithText;
