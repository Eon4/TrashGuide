//Sort My Trash component
import style from './houseOfcards.module.scss';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


export const SortyMyTrashCard = ({ title, filepath, id}) => {

    const [trashCards, setTrashCards] = useState([]);


    // We fetch the detail data for the sections
      useEffect(() => {
        const fetchTrash = async () => {
          try {
            const response = await fetch('http://localhost:3000/section/${id}');
            const data = await response.json();
            setTrashCards(data.items);
          } catch (error) {
            console.error(error);
          }
        };


        fetchTrash();

  const navigate = useNavigate();

  const handleClick = () => {
  };
  
  const displayedTrashCards = gettrashCards(trashCards, 4);


  // Render component
  return (
    <>
   
    <h2>Din guide</h2>
    <h2>til en sund affaldssortering</h2>
    <div className={style.SortyMyTrashStyle} onClick={handleClick}>
      {/* Displaying different kinds of trash*/}
      <img src={filepath} alt={title} />
      <section className={style.SortyMyTrashSCard}>
        <h3>{title}</h3>
    
      </section>
    </div>
    </>
  );
};