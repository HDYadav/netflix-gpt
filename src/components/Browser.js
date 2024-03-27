import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer/> 
    </div>
  )
}

export default Browser