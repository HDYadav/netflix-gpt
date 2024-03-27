import React from 'react'

function GptSearchBar() {
  return (
    <div className="pt-[20%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder="movies suggestion"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-l">
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar