import { useState } from 'react';
import './global.css';
import './app.css';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';


function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div id="app">

        <Sidebar 
        allNotes={allNotes} 
        setAllNotes={setAllNotes} 
        title={title} 
        setTitle={setTitle} 
        notes={notes} 
        setNotes={setNotes} />

        <Main 
        allNotes={allNotes} 
        setAllNotes={setAllNotes} />

    </div>
  );
}

export default App;
