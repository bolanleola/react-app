import React from 'react';
import './App.css';
import Header from './components/Header';
import Students from './components/Students';
import Display from './components/Display';
import Records from './components/Records';
import Assess from './components/Assess';

function App() {
  return (
    <div className="App">
      <Header />
      <Students />
      <Records />
      <Display />
      <Assess />
      
    </div>
  )
}
export default App;
