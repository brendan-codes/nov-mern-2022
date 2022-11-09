import logo from './logo.svg';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import NotFound from './views/NotFound';
import ShowOne from './views/ShowOne';

function App() {

  return (
    <>
      <h1>Welcome to the Songs app!</h1>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/song/:id" element={<ShowOne />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
