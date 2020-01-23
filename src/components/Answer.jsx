import React, { Component } from 'react';
// import components


class Answer extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }
  render() {
    return (
      <div>
        <button>{this.props.a}</button>
      </div>
    );
  }
}

export default Answer;