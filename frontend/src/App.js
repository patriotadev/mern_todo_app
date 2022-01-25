import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path={'/'} element={<Main/>}></Route>
          <Route path={'/:id'} element={<Detail/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;