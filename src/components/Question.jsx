import React, { Component } from 'react';
// import components


class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }
  render() {
    return (
      <div>
        <button>{this.props.q}</button>
      </div>
    );
  }
}

export default Question;