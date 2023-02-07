import Section from 'components/Section';

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
export default FeedbackOptions;
