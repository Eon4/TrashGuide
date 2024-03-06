// ReviewStars component
import React, { useState, useEffect } from 'react';
import style from './ReviewStars.module.scss';
import { FaStar } from 'react-icons/fa';

const ReviewStars = ({ id }) => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        if (id !== undefined) {
          const response = await fetch(`http://localhost:3000/reviews/details/${id}`);
          const data = await response.json();

          // Assuming 'num_stars' is the key in your data
          setStars(data?.num_stars);
        }
      } catch (error) {
        console.error('Error fetching stars:', error);
      }
    };

    fetchStars();
  }, [id]);

  // We create an array of stars based on the 'stars' value - Instead of numbers, we see star icons
  const starArray = Array.from({ length: stars }, (_, index) => (
    <FaStar key={index} className={style.starIcon} />
  ));

  return <div className={style.AmongTheStars}>{starArray}</div>;
};

export default ReviewStars;



