
const ProductImageWithText = ({ imgUrl, title }) => {
  return (
    <>
      <div className="rounded-md overflow-hidden h-32  ">
        <img
          className="aspect-square"
          src={imgUrl}
          alt="product"
        />
      </div>
      <p className="text-md font-bold text-ellipsis overflow-hidden whitespace-nowrap">
        {title}
      </p>
    </>
  );
};

export default ProductImageWithText;
