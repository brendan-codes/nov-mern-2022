import Tabs from './components/Tabs';
import { useState } from 'react';

function App() {
  
  const [tabs] = useState([
    {label: "tab1", content: "this is tab1"},
    {label: "tab2", content: "this is tab2"},
    {label: "tab3", content: "this is tab3"}
  ])

  
  return (
    <div className="App">
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
