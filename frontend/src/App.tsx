import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import './App.css';

function App() {

  return (
    <div  className="App">
      <BrowserRouter>
        <Routes> 
          <Route path="/login" element=
          {
            <Login />
          } 
          />
          <Route path="/" element=
          {
            <Main />
          } 
          /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
