import { useState } from 'react';
import './global.css';
import './app.css';

import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';

import api from './services/api';


function App() {
  const [selectedValue, setSelectedValue] = useState('all');
  const [allNotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  async function getAllNotes(){
    const response = await api.get('/annotations',)

    setAllNotes(response.data);
  }

  async function loadNotes(option){
    const params = { priority: option };
    const response = await api.get('/priorities', { params });

    if(response){
      setAllNotes(response.data);
    }
  }

  return (
    <div id="app">

        <Sidebar 
        allNotes={allNotes} 
        setAllNotes={setAllNotes} 
        title={title} 
        setTitle={setTitle} 
        notes={notes} 
        setNotes={setNotes} 
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        loadNotes={loadNotes}
        getAllNotes={getAllNotes}
        />

        <Main 
        allNotes={allNotes} 
        setAllNotes={setAllNotes} 
        getAllNotes={getAllNotes}
        setSelectedValue={setSelectedValue}
        selectedValue={selectedValue}
        loadNotes={loadNotes}
        />

    </div>
  );
}

export default App;
