import { ContainerBtn, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ContainerBtn>
      {options.map((option, index) => (
        <Button
          type="button"
          key={index}
          value={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </ContainerBtn>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
