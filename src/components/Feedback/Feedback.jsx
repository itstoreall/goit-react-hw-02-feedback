import React, { Component } from 'react';
// import style from './Profile.module.scss';

class Feedback extends Component {
  // Модель (хранение данных)
  // Публичное свойство
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  
  // static propTypes = {};

  handleIncrement = e => {
    // Не основываясь на предидущем
    // this.setState({good: 50})
    this.setState((prevState) => {
      return {
        good: prevState.good + 1
      }
    })
  };

  handleNeutral = e => {
    this.setState((prevState) => ({
        neutral: prevState.neutral + 1
      }))
  };

  handleBad = e => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1
      }
    })
  }

  render() {
    return (
      <div className='Feedback'>
        <p>Please leave feedback</p>
        <div className='buttons'>
          <button 
            className='button' 
            type='button' 
            onClick={this.handleIncrement}>
                Good
          </button>
          <button 
            className='button' 
            type='button' 
            onClick={this.handleNeutral}>
                Neutral
          </button>
          <button 
            className='button' 
            type='button' 
            onClick={this.handleBad}>
                Bad
          </button>
        </div>
        <p>Statistics</p>
        <ul>
          <li>Good: <span className='good'>{this.state.good}</span></li>
          <li>Neutral: <span className='neutral'>{this.state.neutral}</span></li>
          <li>Bad: <span className='bad'>{this.state.bad}</span></li>
        </ul>
      </div>
    );
  };
};

export default Feedback;