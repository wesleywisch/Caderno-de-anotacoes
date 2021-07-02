import { useEffect } from 'react';
import './style.css';

import Notes from '../Notes/Notes';
import api from '../../services/api';


export function Main({ allNotes, setAllNotes, getAllNotes, setSelectedValue, loadNotes, selectedValue }){

    useEffect(() =>{
        getAllNotes();
    }, [])

    async function handleDelete(id){
        const deletedNote = await api.delete(`/annotations/${id}`);

        if(deletedNote){
            setAllNotes(allNotes.filter(note => note._id !== id));
        }
    }

    async function handleChengePriority(id){
        const notePriority = await api.post(`/priorities/${id}`);

        if(notePriority && setSelectedValue !== 'all'){
            loadNotes(selectedValue);
        } else if(notePriority){
            getAllNotes();
        }
    }

    return(
        <main>
            <ul>
                {allNotes.map(data => (
                <Notes 
                key={data._id}
                data={data} 
                handleDelete={handleDelete}
                handleChengePriority={handleChengePriority}
                />
                ))}
            </ul>
      </main>
    )
}