import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    counter: 0,
    initialLoad: true,
  };

  incrementCounter = () =>{
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
      initialLoad: false,
    }))
  };
  decrementCounter = () =>{
    if( this.state.counter == 0 ) {
      this.setState((prevState) => ({
        initialLoad: false,
      }))
      return;
    };
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
      initialLoad: false,
    }))
  };
  render() {
    return <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently {this.state.counter}.</h1>
      {this.state.counter === 0 && !this.state.initialLoad &&
        <h1 data-test="counter-error" style={{color: "red"}}>The counter can't go below zero.</h1>
      }
      <button data-test="increment-button" onClick={this.incrementCounter}>Increment Counter</button>
      <button data-test="decrement-counter" onClick={this.decrementCounter}>Decrement Counter</button>
    </div>
  }
}

export default App;
