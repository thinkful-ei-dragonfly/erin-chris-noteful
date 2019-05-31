import React from 'react'
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext';

export default class ExpandedNote extends React.Component {
  static contextType = NotefulContext;
  render() {
  return (
    <section>
      <Note
        id={this.context.notes.id}
        name={this.context.notes.name}
        modified={this.context.notes.modified}
      />
      <div className='NotePageMain__content'>
        {this.context.notes.content}
      </div>
    </section>
  )
}
}