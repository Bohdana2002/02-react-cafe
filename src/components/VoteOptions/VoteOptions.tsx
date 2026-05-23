import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css';

//пропси конкретного компонента
interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}
const VoteOptions = ({ onVote, onReset, canReset }: VoteOptionsProps) => {
  const clickOnGoodBtn = () => {
    onVote('good');
  };
  const clickOnNeutralBtn = () => {
    onVote('neutral');
  };
  const clickOnBadBtn = () => {
    onVote('bad');
  };
  return (
    <div className={css.container}>
      <button className={css.button} onClick={clickOnGoodBtn}>
        Good
      </button>
      <button className={css.button} onClick={clickOnNeutralBtn}>
        Neutral
      </button>
      <button className={css.button} onClick={clickOnBadBtn}>
        Bad
      </button>
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default VoteOptions;
