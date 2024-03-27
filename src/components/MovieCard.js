import React from 'react'
import { IMG_CDN } from '../utils/constants'

function MovieCard({ posterPath }) {

  //console.log(IMG_CDN + posterPath);
  return (
    <div className='w-48 pr-4'>
      <img alt="image list" src={IMG_CDN + posterPath} />
    </div>
  );
}

export default MovieCard