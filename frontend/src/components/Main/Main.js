import { useEffect } from 'react';
import './style.css';

import Notes from '../Notes/Notes';
import api from '../services/api';


export function Main({ allNotes, setAllNotes }){

    useEffect(() =>{
        async function getAllNotes(){
            const response = await api.get('/annotations',)

            setAllNotes(response.data);
        }

        getAllNotes();
    }, [])

    async function handleDelete(id){
        const deletedNote = await api.delete(`/annotations/${id}`);

        if(deletedNote){
            setAllNotes(allNotes.filter(note => note._id !== id));
        }
    }

    return(
        <main>
            <ul>
                {allNotes.map(data => (
                <Notes 
                key={data.id}
                data={data} 
                handleDelete={handleDelete}
                />
                ))}
            </ul>
      </main>
    )
}