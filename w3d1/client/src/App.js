import logo from './logo.svg';
import axios from 'axios';
import {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    axios.get("http://localhost:9001/api/songs")
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <h1>Hello world!</h1>
  );
}

export default App;
