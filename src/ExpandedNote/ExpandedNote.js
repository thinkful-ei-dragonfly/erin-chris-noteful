import React from 'react'
import Note from '../Note/Note'

export default function ExpandedNote(props) {
  return (
    <section>
      <Note
        id={props.notes.id}
        name={props.notes.name}
        modified={props.notes.modified}
      />
      <div>
        {props.notes.content}
      </div>
    </section>
  )
}