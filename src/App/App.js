import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import FolderList from '../FolderList/FolderList'
import NoteList from '../NoteList/NoteList'
import Note from '../Note/Note'
import STORE from '../dummy-store'
import ExpandedNote from '../ExpandedNote/ExpandedNote'
import './App.css';
import GoBack from '../GoBack/Goback';

export default class App extends Component {
  state = {
    folders: [],
    notes: []
  }
    
componentDidMount() {
  this.setState({
    folders: STORE.folders,
    notes: STORE.notes,
  })
}

getNotesForFolder(notes, id) {
  return notes.filter(note => note.folderId === id)
}

findNote(notes, noteId) {
 return notes.find(note => note.id === noteId)
}

findFolder(folders, folderID) {
  return folders.find(folder => folder.id === folderID)
}

  render() {  
    const { folders, notes } = this.state;
    // const folders = STORE.folders;
    // const notes = STORE.notes;
    console.log(folders);

    return (
      <div className="App">
        <Link to='/'><h1>Noteful</h1></Link>
          <Route
                exact
                path="/"
                render={props => 
                <FolderList 
                  folders={folders} 
                  {...props}
                  />}
            />
            <Route
                exact
                path="/folders/:folderId"
                render={props => 
                <FolderList 
                  folders={folders} 
                  {...props}
                  />}
            />
          <Route 
                exact
                path="/notes/:noteId"
                render={props => {
                  const { noteId } = props.match.params;
                  const note = this.findNote(notes, noteId)
                  const folder = this.findFolder(folders, note.folderId)
                  return (
                    <GoBack {...props}/>
                  )
                }}
          />

          <Route
                exact
                path="/"
                render={() => <NoteList notes={STORE.notes} />}
            />
          <Route
                exact
                path="/folders/:folderId"
                render={props => {
                  const { folderId } = props.match.params;
                  const notesForFolder = this.getNotesForFolder(notes, folderId);
                  console.log(notesForFolder);
                return (
                  <NoteList 
                    notes={notesForFolder} 
                    {...props}
                  />
                )}}
            />
            <Route
                exact
                path="/notes/:noteId"
                render={props => {
                  const { noteId } = props.match.params;
                  const note = this.findNote(notes, noteId);
                  console.log(note);
                return (
                  <ExpandedNote
                    notes={note} 
                    {...props}
                  />
                )}}
            />
      </div>
    )
  }
}
