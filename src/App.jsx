import './App.css';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import { Component } from 'react';
import Section from 'components/Section';

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
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedbackHandler} />
        </Section>

        <Section title={'Statictics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
