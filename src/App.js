import React from 'react';

import Register from './components/pages/Authentication/Register';

import './services/firebase';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Register />
    </div>
  );
}

export default App;
