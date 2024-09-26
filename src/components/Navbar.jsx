import { FaArrowLeft } from 'react-icons/fa';

const Navbar = () => {
  return (
    // <nav className="fixed top-0 right-8 left-8">
      <div className=" bg-white w-full  border-b-2  flex items-center  py-6 shadow-sm">
        <div className="flex flex-1 text-gray-800 items-center gap-4 font-bold text-lg">
          <FaArrowLeft />
          <p className="w-1/5 border-b-2 border-gray-800"> Rules Creation</p>
          <button className="text-[10px] rounded-full px-2 border border-blue-400  text-blue-400 bg-blue-100  ">
            Primary Feed
          </button>
        </div>
        <button className="text-white font-semibold rounded-md px-2 py-2 outline-none bg-green-600 ">
          Publish Feed
        </button>
      </div>
    // </nav>
  );
};

export default Navbar;
