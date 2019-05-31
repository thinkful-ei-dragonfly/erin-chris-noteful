import React from 'react';
import { Route, NavLink} from 'react-router-dom'
import NotefulContext from '../NotefulContext'
import FolderNav from '../FolderNav/FolderNav'

export default class FolderList extends React.Component {
    static contextType = NotefulContext;
    render() {
    const folders = this.context.folders.map(folder => {
        return (
            <li key={folder.id}>
              <NavLink to={`/folders/${folder.id}`} className="folder" key={folder.id} id={folder.id}>
              {folder.name}
              </NavLink>
            </li>
            );
    });
     return (
         <nav className="folderList">
            <ul>
                {folders}
            </ul>
         <button className="addFolder">Add Folder</button>
         </nav>
        )

    }
}
        
      
    