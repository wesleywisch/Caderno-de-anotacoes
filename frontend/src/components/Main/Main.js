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

    return(
        <main>
            <ul>
                {allNotes.map(data => (
                <Notes data={data} />
                ))}
            </ul>
      </main>
    )
}