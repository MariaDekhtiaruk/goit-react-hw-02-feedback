import PropTypes from 'prop-types';
import Section from 'components/Section';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Section title={'Statictics'}>
      {!total ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      )}
    </Section>
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
