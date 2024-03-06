// Sort My Trash component
import style from './SortMyTrash.module.scss';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const SortMyTrashCard = ({ id, title, filename, filepath, color }) => {
  const [trash, setTrash] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch additional details for each trash type using the id
    let url = `http://localhost:3000/section/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTrash(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleClick = () => {
    navigate(`/sorting/${id}`);
};

  // Style for the text with the corresponding background color
  const textStyle = {
    background: `#${color}`, // Assuming the color is in hexadecimal format
  };

  // Render component
  return (
    <div className={style.SortyMyTrashStyle} onClick={handleClick}>
      {/* Displaying different kinds of trash*/}
      <img src={filepath} alt={title} />
      <section className={style.SortyMyTrashSCard}>
        {/* Set the background color dynamically */}
        <h3 style={textStyle}>{title}</h3>
        
      </section>
    </div>
  );
};

export default SortMyTrashCard;
