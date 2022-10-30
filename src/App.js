import React from 'react';
import './assets/styles/style.scss';
import Home from './pages/home/Home';
import Provider from './components/Provider';

function App() {
  return (
    <Provider className='App'>
      <Home />
    </Provider>
  );
}

export default App;
