import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useMoviesTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMoviesVide = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTION
    );

    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "filter");
    const trailer = filterData.lenght ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVide();
  }, []);
};


export default useMoviesTrailer;