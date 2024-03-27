import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import GptSerarch from './GptSerarch';
import { useSelector } from 'react-redux';

const Browser = () => {
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSerarch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </div>
  );
}

export default Browser