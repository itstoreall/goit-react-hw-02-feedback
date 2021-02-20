import React, { Fragment } from 'react';
import Notification from './Notification';
import style from './styles.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  
  <Fragment>
    <p>Statistics</p>
    {total === 0
      ? <Notification message="No feedback given" />
      : <ul className={style.statistics}>
          <li>Good: <span>{good}</span></li>
          <li>Neutral: <span>{neutral}</span></li>
          <li>Bad: <span>{bad}</span></li>
          <li>Total: <span>{total}</span></li>
          <li>Positive feedback: <span>{positivePercentage ? positivePercentage : 0}%</span></li>
        </ul>}
  </Fragment>
);

export default Statistics;