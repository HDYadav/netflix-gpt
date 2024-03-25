import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constants'; 
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

function VideoBackground({ movieID }) {

  const trailerVideo = useSelector(
    (state) => state.movies?.trailerVideo
  );

  console.log(trailerVideo);
  
  const dispatch = useDispatch();

  const getMoviesVide = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1011985/videos?language=en-US",
      API_OPTION
    );

    const json = await data.json();
 
    const filterData = json.results.filter((video) => video.type === "filter");    
    const trailer = filterData.lenght ? filterData[0] : json.results[0];

    
    dispatch(addTrailerVideo(trailer));
  }

  useEffect(() => {
    getMoviesVide();
    
  },[])

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground