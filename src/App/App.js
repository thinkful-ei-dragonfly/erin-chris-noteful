import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import NoteList from '../NoteList/NoteList'
import STORE from '../dummy-store'
import './App.css';

export default class App extends Component {
  state = {
    folders: [],
    notes: []
  }

// renderMainPage() {
//   const {folders, notes} = this.state;

// }
  render() {
    console.log(STORE);
    return (
      <div className="App">
        <Route
                exact
                path="/"
                render={() => <NoteList notes={STORE.notes} />}
            />
      </div>
    )
  }
}
