const ProductFilters = () => {
  return (
    <div className="min-w-96  border-x border-gray-300 text-center py-2 pr-3 pl-6 ">
      <div className="bg-white h-full border-2 border-dashed flex flex-wrap py-4 px-2 text-[10px] gap-2  text-gray-900 font-medium items-center justify-center">
        <p className={`border rounded-md px-1 py-1 `}>Product Collection</p>
        <p
          className={`border rounded-md px-1 py-1 ${
            true ? 'bg-green-100 text-green-700 border-green-300' : ''
          }`}>
          Contains
        </p>
        <p className={`border rounded-md px-1 py-1`}>Anarkali Kurtas</p>
      </div>
    </div>
  );
};

export default ProductFilters;
