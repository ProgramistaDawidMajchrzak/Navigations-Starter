import React, { useState } from 'react';
import './App.css';

import { Sidebar, Content } from './components/index.js';

import { GiHamburgerMenu } from 'react-icons/gi';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <GiHamburgerMenu onClick={toggle} className='hamburger-icon' />
      <Sidebar />
      <Content isOpen={isOpen} />
    </div>
  );
}

export default App;
