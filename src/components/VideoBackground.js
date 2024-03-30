 
import {  useSelector } from 'react-redux';
import useMoviesTrailer from '../hooks/useMoviesTrailer';
 

function VideoBackground({ movieID }) {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  useMoviesTrailer(movieID);
  
   //useMoviesTrailer(movieID);
    

  return (
    <div className="w-screen h-screen flex justify-center items-center">
 
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground