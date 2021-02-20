import React from 'react';
import style from './styles.module.scss';

const FeedbackOptions = ({ onLeaveFeedback: { onGood, onNeutral, onBad } }) => (
    
  <div className={style.buttons}>
    <button type='button' onClick={onGood}>Good</button>
    <button type='button' onClick={onNeutral}>Neutral</button>
    <button type='button' onClick={onBad}>Bad</button>
  </div>
);

export default FeedbackOptions;