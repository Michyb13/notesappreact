import { type } from 'os'
import React from 'react'
import { FaTrashAlt } from "react-icons/fa"

type NoteProps = {
  key: string,
  id: string,
  body: string,
  deleteNote: (id: string) => void
}

const Note = (props: NoteProps) => {
  return (
    <div className='note'>
      <div className='note-body'>{props.body}</div>
        <div className='note-footer'>
         <button className='delete-btn' onClick={() => props.deleteNote (props.id)}> <FaTrashAlt className='delete-icon' /> </button>
        </div>
    </div>
  )
}

export default Note