//Code from this creator: https://www.youtube.com/watch?v=9sSBMF8K7sY 
//GiveStar component for RecyclePageDetails: User can give star ratings
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import style from './GiveStars.module.scss'

const GiveStars = () => {
  const [ratingStars, setRatingStars] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className={style.GiveStars}>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRatingStars(currentRating)}
            />
            <FaStar
              className={style.Starmie}
              size={20}
              color={
                currentRating <= (hover || ratingStars)
                  ? `#F18700`
                  : `#e4e5e9`
              }
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default GiveStars;
