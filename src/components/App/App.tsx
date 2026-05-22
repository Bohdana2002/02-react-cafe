import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions';
import css from './App.module.css';

const App = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleVote = (type) => { };
  return (
    <>
      <div className={css.app}></div>
      <CafeInfo />
      <VoteOptions />
    </>
  );
};
export default App;

// усі компоненти рендеряться всередині компонента App
