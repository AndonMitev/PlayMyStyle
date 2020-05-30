import React from 'react';

import './services/firebase';

import Authentication from './components/pages/Authentication/Authentication';

import './App.scss';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
    <div className='App'>
      <Authentication />
      <Profile />
    </div>
  );
}

export default App;
