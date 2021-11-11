import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css';

import HomePage from './modules/public/views/Homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
