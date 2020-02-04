import React from 'react';
import { Provider } from 'react-redux';
import RootRouter from './routes';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootRouter></RootRouter>
    </Provider>
  );
};

export default App;
