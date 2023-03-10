import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtn = e => {
    const value = e.target.value;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    const data = this.state;
    return Object.values(data).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const percentage = Math.round((good / total) * 100);

    return percentage;
  };

  render() {
    const options = Object.keys(this.state);
    const { good, bad, neutral } = this.state;
    const total = this.countTotalFeedback();
    const countPositivePercent = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <GlobalStyle />
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onClickBtn}
            />
          }
        />
        <Section title="Statistic">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositivePercent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
