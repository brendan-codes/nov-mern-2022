import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import Input from './components/Input';
import { useState } from 'react';
import Box from './components/Box';

function App() {
  const [colors, setColors] = useState(["blue", "red"]);

  return (
    <>
      <ul>
        { colors.map( (c, i) => 
            <Box key={i} color={c} />
        )}
      </ul>
      <PersonCard name={"Brendan"} email={"email@email.email"}/>
      <Input colors={colors} setColors={setColors} />
    </>
  );
}

export default App;
