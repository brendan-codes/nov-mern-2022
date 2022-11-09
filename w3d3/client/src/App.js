// import logo from './logo.svg';
// import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import Show from './views/Show';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/new" element={<Create />}/>
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/show/:id" element={<Show />}/>
      </Routes>
    </div>
  );
}

export default App;
