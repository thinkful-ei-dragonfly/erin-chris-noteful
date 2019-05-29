import React from 'react'

export default function GoBack(props) {
    return (
        <nav>
            <button className="goBackButton" 
            onClick={() => props.history.goBack()}
            >Go Back</button>
        </nav>
    )
}