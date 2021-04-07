import React, { useEffect } from 'react'
import Filter from '../Filter/Filter'
import SearchComponent from '../SearchComponent/SearchComponent'

import { Link, useLocation} from 'react-router-dom';
import "./library-header.css"

const LibraryHeader = ({setActive}) => {
     let {pathname} = useLocation();
    
    return (
        <>
        <div className="library-container">
            <ul className="library-list-container">
                <li >
                    <Link className={`nav-link ${(pathname === "/library") ? "library-list-item active" : "library-list-item"}`} to="/library">All files</Link>
                    </li>
                <li >
                    <Link className={`nav-link ${(pathname === "/library/collection") ? "library-list-item active" : "library-list-item"}`} to="/library/collection">My library & collections</Link></li>
                <li >
                    <Link className={`nav-link ${(pathname === "/library/collection/users") ? "library-list-item active" : "library-list-item"}`} to="/library/collection/users">Users collection</Link></li>
                <li >
                    <Link className={`nav-link ${(pathname === "/library/collection/saved") ? "library-list-item active" : "library-list-item"}`} to="/library/collection/saved">Saved collection</Link></li>
            </ul>
            <button className="default-btn" onClick={() => setActive(true)}>Add files</button>
        </div>
        <div className="library-sub-header">
              <div className="library-sub-header-1">
              <SearchComponent /> 
              </div>
              <div className="library-sub-header-2">
              <Filter />
              </div>
           </div>
        </>
    )
}

export default LibraryHeader