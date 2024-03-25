import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

function App() {
   
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
