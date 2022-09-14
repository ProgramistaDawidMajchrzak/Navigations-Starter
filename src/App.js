import React from 'react';
import './App.css';

import { Sidebar, Content } from './components/index.js';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
