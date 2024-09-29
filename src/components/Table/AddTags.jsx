import { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { suggestedTags } from '../../utils/constants';

const AddTags = ({ handleAddTags }) => {
  const [filters, setFilters] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');
  const handleChange = (e) => {
    setCurrentFilter(e.target.value);
  };

  const handleAddFilter = () => {
    if (currentFilter) {
      setFilters([...filters, currentFilter]);
      setCurrentFilter('');
    }
  };

  const removeFilter = (filter) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  return (
    <div className="bg-white w-2/5 h-2/5 flex flex-col gap-3 items-start justify-center py-4 px-8">
      <p className="text-md  font-bold">
        Type tags/filters you want to add or select from suggestions
      </p>
      <div className="flex gap-2 w-full">
        <div className="border w-4/5 border-gray-300 rounded-md px-3 py-2">
          <input
            onChange={handleChange}
            value={currentFilter}
            type="text"
            placeholder="Write filter names here"
            className="outline-none w-full h-full"
          />
        </div>
        <button
          className=" text-gray-700 border border-gray-400 px-3 py-2 rounded-md hover:shadow-md outline-none "
          onClick={handleAddFilter}>
          Add
        </button>
      </div>
      <div className="flex gap-3">
        Suggestion:{' '}
        <div className="flex gap-2">
          {suggestedTags.map((item, index) => (
            <span
              className="bg-gray-100 border rounded-md px-2 "
              key={index}
              onClick={() => setFilters([...filters, item])}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        Your Tags:{' '}
        <div className="flex gap-2">
          {filters.length > 0 &&
            filters.map((item, index) => (
              <span
                className="flex gap-2 items-center bg-gray-100 border rounded-md px-2 "
                key={index}>
                {item}
                <FaPlus
                  className="cursor-pointer fill-red-500 rotate-45"
                  onClick={() => removeFilter(item)}
                />
              </span>
            ))}
          {filters.length === 0 && <span className="text-xs text-red-500">No filters added</span>}
        </div>
      </div>

      <button
        className="bg-green-500 text-white px-3 py-2 rounded-md "
        onClick={() => handleAddTags(filters)}>
        Submit
      </button>
    </div>
  );
};

export default AddTags;
