import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

 
const usePopularMovies = () => { 
  const dispatch = useDispatch();
 

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?page=1",
      API_OPTION
    );

    const json = await data.json();
  //  console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies; // Corrected export
