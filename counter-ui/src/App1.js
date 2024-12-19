import './App.css';
import React from 'react'
import CounterCC from './countercom/CounterCC';
import CounterFC from './countercom/CounterFC';
export default function App1() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter UI</h1>
      <CounterCC />
      <p>------------</p>
      <CounterFC />
      </header>
    </div>
  )
}
