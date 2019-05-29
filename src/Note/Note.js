import React from 'react';

function Note(props) {
    return (
        <div className="note">
            <h2>{props.name}</h2>
            <p>{props.modified}</p>
        </div>
    )
}

export default Note;