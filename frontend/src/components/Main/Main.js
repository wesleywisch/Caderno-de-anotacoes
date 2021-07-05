import { useEffect, useContext } from 'react';
import './style.css';

import Notes from '../Notes/Notes';
import api from '../../services/api';

import { ContextAll } from '../../provider/ContextAll';

export function Main(){
    const { selectedValue, allNotes, setAllNotes } = useContext(ContextAll)

    const { getAllNotes, loadNotes } = useContext(ContextAll)

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

        if(notePriority && selectedValue !== 'all'){
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