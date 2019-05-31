import React from 'react';
import NotefulContext from '../NotefulContext';
import { Route, NavLink} from 'react-router-dom'

class Note extends React.Component {
    static contextType = NotefulContext;
    render() {
    return (
        <div className="note">
            <NavLink to={`/notes/${this.props.id}`}><h2>{this.props.name}</h2></NavLink>
            <p>{this.props.modified}</p>
            <p>{this.props.content}</p>
            <button
            className='Note__delete'
            type='button'
            >Delete</button>
        </div>
    )
}
}

export default Note;
