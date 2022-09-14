import React from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/component1">Component 1</NavLink>
                </li>
                <li>
                    <NavLink to="/component2">Component 2</NavLink>
                </li>
                <li>
                    <NavLink to="/component3">Component 3</NavLink>
                </li>
                <li>
                    <NavLink to="/component4">Component 4</NavLink>
                </li>
                <li>
                    <NavLink to="/component5">Component 5</NavLink>
                </li>
                <li>
                    <NavLink to="/component6">Component 6</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;