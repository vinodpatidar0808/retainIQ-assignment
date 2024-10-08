const Backdrop = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden no-scrollbar z-50  bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
      {children}
    </div>
  );
};

export default Backdrop;
