
// Find and Review component with two links for find station and login prop component
import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './FindandReview.module.scss';

const FindAndReviewMe = () => {
  const history = useHistory();

  const handleFindStationClick = () => {
    history.push('/recycling');
  };

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
<div className={style.FindAndReviewContainer}>
  <h2>Find og anmeld genbrugsstationer</h2>
  <li>
    <button onClick={handleFindStationClick}>
      Find station
    </button>
  </li>
  <li>
    <button onClick={handleLoginClick}>
      Log ind
    </button>
  </li>
</div>

  );
}

export default FindAndReviewMe;

