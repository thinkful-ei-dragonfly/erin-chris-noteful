import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import FolderList from '../FolderList/FolderList'
import NoteList from '../NoteList/NoteList'
import STORE from '../dummy-store'
import './App.css';

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
      </div>
    )
  }
}
