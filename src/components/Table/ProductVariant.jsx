import AddButton from './AddButton';
import ProductImageWithText from './ProductImageWithText';

const ProductVariant = ({ rowIndex, columnIndex, setTableData, url = '', title = '' }) => {
  const handleDeleteVariant = (item) => {
    
  };

  return (
    <>
      <div className="min-w-48 w-48 border-r border-gray-300 text-center py-2 pr-3 pl-6 ">
        <div
          className={`bg-white h-full border-2 border-dashed flex flex-col justify-center gap-1 px-6 py-3 text-gray-900 ${
            !url ? 'items-center text-xs ' : 'text-[10px]  font-medium '
          }`}>
          {!url ? (
            <AddButton
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              setTableData={setTableData}
              text="Add design"
            />
          ) : (
            <ProductImageWithText
              imgUrl={url}
              title={title}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductVariant;
