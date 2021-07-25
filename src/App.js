import React, { createContext, useState } from 'react';
import './App.css';
import Chart from './components/Chart';
import Header from './components/Header';


export const countContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  return (
    <countContext.Provider value={count} className="App">
      <Header />
     <Chart count={count} setCount={setCount}/>
    </countContext.Provider>
  );
}

export default App;
