import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import FolderList from '../FolderList/FolderList'
import NoteList from '../NoteList/NoteList'
import apiHandle from '../API_ENDPOINT'
import STORE from '../dummy-store'
import ExpandedNote from '../ExpandedNote/ExpandedNote'
import NotefulContext from '../NotefulContext'
import './App.css';
import GoBack from '../GoBack/Goback';

export default class App extends Component {
  state = {
    folders: [],
    notes: []
  }
    
  componentDidMount() {
    Promise.all([
      fetch('http://localhost:9090/folders').then(res => res.json())
      , fetch('http://localhost:9090/notes').then(res => res.json())])
    .then(results => {
      this.setState({
        notes: results[1],
        folders: results[0]
      });
    })
  }

  findNote = (notes=[], noteId) => {
  notes.find(note => note.id === noteId)
  }


  render() {  
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
    }

    return (
      <NotefulContext.Provider value={value}>
      <div className="App">
        <Link to='/'><h1>Noteful</h1></Link>
          <Route
                exact
                path="/"
                component={FolderList}
            />
            <Route
                exact
                path="/folders/:folderId"
                component={FolderList}
            />
          <Route 
                exact
                path="/notes/:noteId"
                component={GoBack}
          />

          <Route
                exact
                path="/"
                component={NoteList}
            />
          <Route
                exact
                path="/folders/:folderId"
                component={NoteList}
            />
           <Route
              path='/note/:noteId'
              component={ExpandedNote}
            />
            )
          }}
        />
      </div>
      </NotefulContext.Provider>
    )
  }
}
