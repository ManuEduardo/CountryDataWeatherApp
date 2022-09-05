const Find = ({ theFilter, handleFilterChange }) => {
  return (
    <div className="m-5 mt-14 flex flex-col items-center">
      <h1 className="text-6xl md:text-8xl font-serif font-bold text-center text-slate-50 mb-5 indent-3 drop-shadow-xl">
        Find Countries{" "}
      </h1>
      <input
        value={theFilter}
        onChange={handleFilterChange}
        placeholder="Country..."
        className=" italic font-light tracking-widest border-2 border-b-indigo-400 rounded max-w-lg w-5/6 md:w-3/5 m-3 p-1 caret-teal-500 shadow-md transition-shadow focus:shadow-lg focus:shadow-teal-300/80"
      ></input>
    </div>
  );
};

export default Find;
