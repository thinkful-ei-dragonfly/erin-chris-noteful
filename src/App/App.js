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

//create filter functions? find specific folder ID

  render() {
    console.log(STORE);
    return (
      //add nav section with two routes (main list and 'back')
      //add second main route for note & create component
        //pass in shorthand (...props) for match/history/location
        //pass in folders prop
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
