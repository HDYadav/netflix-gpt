import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
 

function MainContainer() {
  //const movies = useSelector((store) => store.nowPlayingMovies);
  const movies = useSelector((state) => state.movies?.nowPlayingMovies); // Assuming user state is stored in Redux

//   console.log(movies);

  if (!movies) {
    return <div>Loading...</div>;
  }

  const mainMovie = movies[0];
   // console.log(mainMovie);
    
    const { original_title, overview,id} = mainMovie;
 // console.log(id);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer