import React from 'react';
import './Content.css';
import { Routes, Route } from "react-router-dom";
import {
    Component1,
    Component2,
    Component3,
    Component4,
    Component5,
    Component6,
} from '../index';

function Content({ isOpen }) {
    return (
        // <div className={isOpen ? "sidebar-open" : "sidebar"}>
        <div className="sidebar-open">
            <Routes>
                <Route path="/" element={<Component1 />} />
                <Route path="/component2" element={<Component2 />} />
                <Route path="/component3" element={<Component3 />} />
                <Route path="/component4" element={<Component4 />} />
                <Route path="/component5" element={<Component5 />} />
                <Route path="/component6" element={<Component6 />} />
            </Routes>
        </div>
    )
}

export default Content