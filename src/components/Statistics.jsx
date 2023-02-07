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
export default Statistics;
