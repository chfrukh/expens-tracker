import React from 'react';
import './App.css';
import { ContextProvider } from './context';
import ExpenseTracker from './ExpenseTracker';

function App() {

  return (
    <ContextProvider>
      <ExpenseTracker />
    </ContextProvider>
  );
}

export default App;