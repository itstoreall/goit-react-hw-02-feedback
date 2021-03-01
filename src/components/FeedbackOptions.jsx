import React from 'react';
import PropTypes from 'prop-types';
import style from './styles.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={style.buttons}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
