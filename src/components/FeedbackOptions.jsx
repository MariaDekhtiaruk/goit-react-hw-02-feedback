import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="button-wrap">
      <button
        type="button"
        className="button"
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className="button"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className="button"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
