import React from 'react';
import Header from './components/Header';
import LoanCalculator from './components/LoanCalculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LoanCalculator />
      </main>
    </div>
  );
}

export default App;
