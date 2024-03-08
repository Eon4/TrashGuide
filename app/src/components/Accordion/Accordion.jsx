//Accordian is inspired from a collaboration with other developers in a code Challenge: https://github.com/Eon4/CodeChallenge/tree/main/code/src/Components/Accordion 
import { useEffect, useState } from 'react';
import style from './Accordion.module.scss';
import { useFetch } from '../../hooks/useFetch';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from "react-icons/io";

export const Accordion = ({ id, imgSrc, title }) => {
  // A state to manage the accordion's active state
  const [isActive, setIsActive] = useState(false);

  // Fetch data for the accordion from the API
  const { data, loading, error } = useFetch(
    `http://localhost:3000/category/details/${id}`
  );

  return (
    <section className={style.accordionContainer}>
      {/* Display loading message if data is still loading */}
      {loading && <p>Loading...</p>}
      {/* Display error message if there's an error fetching data */}
      {error && <p>Error: {error.message}</p>}
      {/* Accordion item section */}
      <section className={style.accordionItem}>
        <section
          className={style.accordionTitle}
          onClick={() => setIsActive(!isActive)}
        >
          <img className={style.iconImg} src={imgSrc} alt={title} />
          <h4>{title}</h4>
        </section>
        {/* Display accordion content if isActive is true */}
        {isActive && (
          <section className={style.accordionContent}>
            <article>
              <h5>Hvad modtager vi</h5>
              <hr />
              {/* Map through data types and display allowed items */}
              {data.types.map((item, index) => (
                <section key={index}>
                  {item.rules.is_allowed && (
                    <section>
                      <p>{item.title}</p> <p>Ja tak</p>
                    </section>
                  )}
                </section>
              ))}
              <h5>Hvad modtager vi ikke</h5>
              <hr />
              {/* Map through data types and display disallowed items */}
              {data.types.map((item, index) => (
                <section key={index}>
                  {!item.rules.is_allowed && (
                    <section>
                      <p>{item.title}</p> <p>Nej tak</p>
                    </section>
                  )}
                </section>
              ))}
            </article>
          </section>
        )}
        {/* Accordion button to toggle active state */}
        <section
          className={style.accordionBtn}
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <IoIosArrowDropupCircle />
          ) : (
            <IoIosArrowDropdownCircle />
          )}
        </section>
      </section>
    </section>
  );
};