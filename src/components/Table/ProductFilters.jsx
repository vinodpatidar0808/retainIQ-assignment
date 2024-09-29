import { showToastMessage } from '../../utils/constants';
import AddButton from './AddButton';

const ProductFilters = ({ rowIndex, setTableData, tags = [], selectedTags = {} }) => {
  // add provided tags to table state, which replaces add product filters button
  const handleAddTags = (tags) => {
    setTableData((curr) => {
      let tempArray = structuredClone(curr);
      tempArray[rowIndex].tags = tags;
      return tempArray;
    });
    showToastMessage('SUCCESS', 'Product Filters Added');
  };

  // select unselect tags based on their current state from product filters in each row
  const handleSelectTag = (tag) => {
    setTableData((curr) => {
      let tempArray = structuredClone(curr);
      tempArray[rowIndex].selectedTags[tag] = !tempArray[rowIndex].selectedTags[tag];
      return tempArray;
    });
  };

  return (
    <div className="min-w-96  border-x border-gray-300 text-center py-2 pr-3 pl-6 ">
      <div
        className={`bg-white h-full items-center border-2 border-dashed flex flex-wrap justify-center py-4 px-2 gap-2 text-gray-900   ${
          !tags.length ? ' text-xs ' : 'text-[10px] font-medium'
        } `}>
        {!tags.length ? (
          <AddButton
            handleAddTags={handleAddTags}
            type="filters"
            text="Add Product Filters"
          />
        ) : (
          tags.map((tag, index) => (
            <p
              key={index}
              onClick={() => handleSelectTag(tag)}
              className={`border cursor-pointer rounded-md px-1 py-1 ${
                selectedTags[tag] ? 'bg-green-100 text-green-700 border-green-300' : ''
              }`}>
              {tag}
            </p>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
