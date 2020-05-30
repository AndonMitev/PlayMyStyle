import React from 'react';

import './services/firebase';

import Authentication from './components/pages/Authentication/Authentication';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Authentication />
    </div>
  );
}

export default App;
