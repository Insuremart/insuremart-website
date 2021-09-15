import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import HomePage from './modules/public/views/Homepage'

function App() {
  return (
    <Router>
    <Route path="/" component={HomePage}/>
  </Router>
  );
}

export default App;
