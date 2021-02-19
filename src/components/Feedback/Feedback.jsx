import React, { Component } from 'react';

class Feedback extends Component {

  static propTypes = {};

  render() {
    return (
      <div className='Feedback'>
        <p>Please leave feedback</p>
        <div className='buttons'>
          <button className='button' type='button' onClick={() => {console.log('Good')}}>Good</button>
          <button className='button' type='button' onClick={() => {console.log('Neutral')}}>Neutral</button>
          <button className='button' type='button' onClick={() => {console.log('Bad')}}>Bad</button>
        </div>
        <p>Statistics</p>
        <ul>
          <li>Good: <span className='good'>0</span></li>
          <li>Neutral: <span className='neutral'>0</span></li>
          <li>Bad: <span className='bad'>0</span></li>
        </ul>
      </div>
    );
  };
};

export default Feedback;