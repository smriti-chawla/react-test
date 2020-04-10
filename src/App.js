import React from 'react';
import logo from './logo.svg';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

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
      }));
      return;
    };
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
      initialLoad: false,
    }))
  };
  render() {
    return <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{ guessedWord: 'train',letterMatchCount: 3 }]} />
    </div>
  }
}

export default App;
