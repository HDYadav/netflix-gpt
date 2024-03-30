import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

function GptSearchBar() {
  const langKey = useSelector((store) => store.lang.lang);

   //console.log(langKey);
  return (
    <div className="pt-[20%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder={lang[langKey].gptPlaceHolder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-l">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar