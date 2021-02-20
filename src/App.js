import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

class App extends Component {
  // static propTypes = {};
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleGood = e => {
    // Не основываясь на предидущем
    // this.setState({good: 50})
    this.setState((prevState) => ({
        good: prevState.good + 1
      }
    ))
  }

  handleNeutral = e => {
    this.setState((prevState) => ({
        neutral: prevState.neutral + 1
      }
    ))
  }

  handleBad = e => {
    this.setState((prevState) => ({
        bad: prevState.bad + 1
      }
    ))
  }

  countTotalFeedback = () => {
    return this.state.good
      + this.state.neutral
      + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good
      * 100
      / (this.state.good
      + this.state.neutral 
      + this.state.bad
    ))
  }

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={this.state}
          onLeaveFeedback={{
            onGood: this.handleGood,
            onNeutral: this.handleNeutral,
            onBad: this.handleBad
        }}  
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  };
};

export default App;