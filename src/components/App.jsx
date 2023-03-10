import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { GlobalStyle } from './GlobalStyle';

const OPTIONS = ['good', 'neutral', 'bad'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickBtn = e => {
    const value = e.target.value;

    switch (value) {
      case OPTIONS[0]:
        return setGood(prev => prev + 1);
      case OPTIONS[1]:
        return setNeutral(prev => prev + 1);
      case OPTIONS[2]:
        return setBad(prev => prev + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return [good, neutral, bad].reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((good / countTotalFeedback()) * 100);

    return percentage;
  };

  return (
    <div>
      <GlobalStyle />
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions options={OPTIONS} onLeaveFeedback={onClickBtn} />
        }
      />
      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
