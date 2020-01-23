import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import Answer from './Answer.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    partOne: [{<Question />}, {<Answer />}]
    }
    appendPart()=> {
      for(var i = 0; i < this.state.partOne; i++){
        this.state.partOne[i];
      }
    }
  render() {
    return (
      <div className="app">
        Trivia!
        {appendPart}
      </div>
    );
  }
}

export default App;