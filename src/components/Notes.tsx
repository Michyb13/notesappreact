import React from 'react'
import {v4 as uuidv4 } from "uuid"
import { FaPlus  } from "react-icons/fa"
import Note from './Note'


interface NoteProp {
        id:string,
        text: string,
        
}



const Notes = () => {
    const [body, setBody] = React.useState("")
    const [notes, setNotes] = React.useState<NoteProp[]>( JSON.parse(localStorage.getItem("list") || "") || [])

    


    React.useEffect(() =>{
            localStorage.setItem("list", JSON.stringify(notes))
    },[notes])


    const newNote = () => {
        setNotes(prevNotes => {
            return(
                [
                    ...prevNotes,
                    {
                        id: uuidv4(),
                        text: body,
                        delete: false
                    }
                ]
            )
        })
        setBody("")
}
const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
       setBody(e.target.value)
}

const deleteNote = (id: string) => {
        setNotes(prevNotes => prevNotes.filter(item => item.id !== id))
}

const render = notes.map(item => {
    return(
        <Note 
        key={item.id}
        id={item.id} 
        body={item.text} 
        deleteNote={deleteNote}
        />
    )
})


  return (
    <div className='notes'>
        {render}
       <div className='note' >           
        <textarea 
            cols={10}
            rows={5}
            maxLength={150}
            placeholder='Type New Note'
            onChange={handleChange}
            value={body}
            
            />
            <div className='note-footer'>
                <button className='save-btn' onClick={newNote}><FaPlus className='save-icon' /> </button>
            </div>
       </div>
    </div>
  )
}

export default Notes