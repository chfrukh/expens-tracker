import React from 'react';
import './App.css';
import { ContextProvider } from './Context';
import ExpenseTracker from './ExpenseTracker';
import bu from './bu.png';
import crc from './crc.png';
import kjp from './kjp.png';
function App() {

  return (
    <div>
    <header className="header">
        <a href="https://www.bahria.edu.pk/" target="_blank">
          <img src = {bu} className ="logol" alt="Bu"/>
        </a>
        <a href="https://kamyabjawan.gov.pk/" target="_blank">
        <img src = {kjp} className ="logoc" alt="kjp"/>
        </a>
        <a href="https://crc.bahria.edu.pk/" target="_blank">
        <img src = {crc} className ="logor" alt="crc"/>
        </a>
      </header>
    <ContextProvider>
      <ExpenseTracker />
    </ContextProvider>
    </div>
  );
}

export default App;