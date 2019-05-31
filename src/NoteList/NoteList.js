import React from 'react';
import Note from '../Note/Note';
import NotefulContext from '../NotefulContext';
import { Route, Link } from 'react-router-dom'


export default class NoteList extends React.Component {
    static contextType = NotefulContext;
    render() {
    //const { name, id, modified } = this.props
    return (
      <section className='NoteListMain'>
        <ul>
          {this.context.notes.map(note =>
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={note.modified}
              />
            </li>
          )}
        </ul>
      </section>
    )
}
}