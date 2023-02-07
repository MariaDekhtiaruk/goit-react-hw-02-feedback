import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Component } from 'react';

import './App.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  onLeaveFeedbackHandler = feedback => {
    const newState = { ...this.state };
    newState[feedback] += 1;

    this.setState(newState);
    console.log(this.state, feedback, this.state[feedback]);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <FeedbackOptions
          options={1}
          onLeaveFeedback={this.onLeaveFeedbackHandler}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
