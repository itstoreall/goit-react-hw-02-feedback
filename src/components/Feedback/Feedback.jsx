// import React, { Component } from 'react';
// import Controls from './Controls';
// import Values from './Values';
// import style from './Feedback.module.scss';

// class Feedback extends Component {
//   // Модель (хранение данных)
//   // Публичное свойство
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

//   // static propTypes = {};

//   handleGood = e => {
//     // Не основываясь на предидущем
//     // this.setState({good: 50})
//     this.setState((prevState) => {
//       return {
//         good: prevState.good + 1
//       }
//     })
//   }

//   handleNeutral = e => {
//     this.setState((prevState) => {
//       return {
//         neutral: prevState.neutral + 1
//       }
//     })
//   }

//   handleBad = e => {
//     this.setState((prevState) => {
//       return {
//         bad: prevState.bad + 1
//       }})
//   }

//   countTotalFeedback = () => {
//     return this.state.good
//       + this.state.neutral
//       + this.state.bad;
//   }

//   countPositiveFeedbackPercentage = () => {
//     return Math.round(this.state.good
//       * 100
//       / (this.state.good
//       + this.state.neutral 
//       + this.state.bad
//       ))
//   }

//   render() {
//     return (
//       <div className={style.Feedback}>
//         <p>Please leave feedback</p>
//         <Controls
//           onGood={this.handleGood}
//           onNeutral={this.handleNeutral}
//           onBad={this.handleBad}
//           style={style}
//         />
//         <p>Statistics</p>
//         <Values
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positiveFeedback={this.countPositiveFeedbackPercentage()}
//           style={style}
//         />
//       </div>
//     );
//   };
// };

// export default Feedback;