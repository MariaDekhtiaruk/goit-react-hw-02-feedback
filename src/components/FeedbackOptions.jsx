import Section from 'components/Section';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title={'Please leave feedback'}>
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
    </Section>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
