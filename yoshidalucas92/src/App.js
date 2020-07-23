import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/header';
import Home from './pages/home';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
