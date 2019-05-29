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
    state: STORE
  })
}
  render() {  
    return (
      <div className="App">
        <Link to='/'><h1>Noteful</h1></Link>
        <Route
                exact
                path="/"
                render={() => <FolderList folders={STORE.folders} />}
            />
        <Route
                exact
                path="/"
                render={() => <NoteList notes={STORE.notes} />}
            />
      </div>
    )
  }
}
