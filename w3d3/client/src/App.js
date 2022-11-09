import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/new" element={<Create />}/>
      </Routes>
    </div>
  );
}

export default App;
