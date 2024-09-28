
const ProductImageWithText = ({ imgUrl, title }) => {
  return (
    <>
      <div className="rounded-md overflow-hidden h-32  ">
        <img
          className="aspect-square"
          // src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src={imgUrl}
          alt="product"
        />
      </div>
      <p className="text-md font-bold text-ellipsis overflow-hidden whitespace-nowrap">
        {title}
        {/* Test image for the image{' '} */}
      </p>
    </>
  );
};

export default ProductImageWithText;
