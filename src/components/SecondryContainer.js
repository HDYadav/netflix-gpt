import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList
          title="Now Playing"
          movies={movies?.nowPlayingMovies || []}
        />
        <MovieList title="Trending" movies={movies?.nowPlayingMovies || []} />
        <MovieList title="Popular" movies={movies?.nowPopularMovies || []} />
        <MovieList title="Upcomming" movies={movies?.nowPlayingMovies || []} />
        <MovieList title="Horrer" movies={movies?.nowPlayingMovies || []} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
