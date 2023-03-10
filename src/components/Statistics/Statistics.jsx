import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsInfo,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        Good: <StatisticsInfo>{good}</StatisticsInfo>
      </StatisticsItem>
      <StatisticsItem>
        Neutral: <StatisticsInfo>{neutral}</StatisticsInfo>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <StatisticsInfo>{bad}</StatisticsInfo>
      </StatisticsItem>
      <StatisticsItem>
        Total: <StatisticsInfo>{total}</StatisticsInfo>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback: <StatisticsInfo>{positivePercentage}</StatisticsInfo>
        %
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
