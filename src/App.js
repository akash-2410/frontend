import React from 'react';
import RuleForm from './components/RuleForm';
import RuleList from './components/RuleList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Rule Engine</h1>
      <RuleForm />
      <RuleList />
    </div>
  );
}

export default App;
