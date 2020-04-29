import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

import GuessedWords from './GuessedWords';
import Input from './Input';
import { guessWord } from "./actions";
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
      <Congrats success={this.props.success} />
      <Input />
      <GuessedWords guessedWords={this.props.guessedWords} />
    </div>
  }
}
const mapStateToProps = (state)  =>{
  return {
    success: state.success,
    guessedWords: state.guessedWords,
    secretWord: state.secretWord,
  }
};

export default connect(mapStateToProps, { guessWord })(App);
