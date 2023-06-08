// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './CreatePost';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
