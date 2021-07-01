import { useEffect } from 'react';
import './style.css';

import api from '../services/api';

import { RadioButton } from '../RadioButton/RadionButton';


export function Sidebar({ allNotes, setAllNotes, title, setTitle, notes, setNotes }){

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    });

    setTitle('');
    setNotes('');

    setAllNotes([...allNotes, response.data])
  }

  useEffect(() =>{
    function enableSubmitButton(){
      let button = document.getElementById('btn-submit');
      button.style.background = '#FD3CA';

      if(title && notes){
        button.style.background = '#EB8F7A';
      }
    }
    enableSubmitButton()
  },[title, notes])

    return(
        <aside>

        <strong>Caderno de Notas</strong>

        <form onSubmit={handleSubmit}>

          <div className="input-block">
            <label htmlFor="title">Título da Anotação</label>
            <input 
            required
            maxLength="30"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea 
            required
            value={notes}
            onChange={e => setNotes(e.target.value)}
            />
          </div>
          
          <button id="btn-submit" type="submit">Salvar</button>
        </form>

        <RadioButton />
      </aside>
    )
}

