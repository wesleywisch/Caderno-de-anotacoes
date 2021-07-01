import React from 'react';
import './global.css';
import './app.css';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';


function App() {
  return (
    <div id="app">

      <Sidebar />
      <Main />

    </div>
  );
}

export default App;
