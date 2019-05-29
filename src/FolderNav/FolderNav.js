import React from 'react'


export default function FolderNav(props) {
    return (
      <div className="Folder" id={props.id}>{props.name}</div>
    )
  }