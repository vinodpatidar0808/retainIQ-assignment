import AddButton from './AddButton';

const ProductFilters = ({ tags = [], selectedTags = {} }) => {
  console.log('!tags', !tags);
  return (
    <div className="min-w-96  border-x border-gray-300 text-center py-2 pr-3 pl-6 ">
      <div
        className={`bg-white h-full border-2 border-dashed flex flex-wrap justify-center py-4 px-2 gap-2 text-gray-900   ${
          !tags.length ? ' text-xs items-center' : 'text-[10px] font-medium'
        } `}>
        {!tags.length ? (
          <AddButton text="Add Product Filters" />
        ) : (
          tags.map((tag, index) => (
            <p
              key={index}
              className={`border rounded-md px-1 py-1 ${
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
