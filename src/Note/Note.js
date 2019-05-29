import React from 'react';
import { Route, NavLink} from 'react-router-dom'

function Note(props) {
    return (
        <div className="note">
            <NavLink to={`/notes/${props.id}`}><h2>{props.name}</h2></NavLink>
            <p>{props.modified}</p>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;
