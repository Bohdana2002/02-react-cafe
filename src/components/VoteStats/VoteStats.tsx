import type { Votes } from '../../types/votes';
import css from './VoteStats.module.css';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number; // загальна кількість голосів
  positiveRate: number; // відсоток позитивних голосів
}
const VoteStats = ({
  votes: { good, neutral, bad },
  totalVotes,
  positiveRate,
}: VoteStatsProps) => {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <strong>{good}</strong>
      </p>
      <p className={css.stat}>
        Neutral: <strong>{neutral}</strong>
      </p>
      <p className={css.stat}>
        Bad: <strong>{bad}</strong>
      </p>
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
