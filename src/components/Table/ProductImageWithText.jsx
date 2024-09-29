import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';

const ProductImageWithText = ({ imgUrl, title }) => {
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer p-2  rounded-md bg-white ">
            <FiEdit className=" w-6 h-6 " />
          </div>
        )}
      </div>
      <p className="text-md font-bold text-ellipsis overflow-hidden whitespace-nowrap">{title}</p>
    </>
  );
};

export default ProductImageWithText;
