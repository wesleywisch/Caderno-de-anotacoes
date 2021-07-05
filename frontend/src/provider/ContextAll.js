import { createContext, useState } from "react";

import api from "../services/api";

export const ContextAll = createContext({});


export function ContextProvider(props){
    const [ selectedValue, setSelectedValue ] = useState('all');
    const [ allNotes, setAllNotes ] = useState([]);
  
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

    return(
    <ContextAll.Provider value={{selectedValue, setSelectedValue, 
    allNotes, setAllNotes, getAllNotes, loadNotes}}>
        {props.children}
    </ContextAll.Provider>
    )
}