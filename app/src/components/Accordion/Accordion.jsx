//Accordion component 
import React, { useEffect, useState } from 'react';
import style from './Accordion.module.scss';
import { useFetch } from '../../hooks/useFetch';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from "react-icons/io";

export const Accordion = ({ id, imgSrc, title }) => {
  const [isActive, setIsActive] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:3000/category/details/${id}`
  );


  
  return (
    <section className={style.accordionContainer}>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <section className={style.accordionItem}>
        <section
          className={style.accordionTitle}
          onClick={() => setIsActive(!isActive)}
        >
          <img src={imgSrc} alt={title} />
          <h4>{title}</h4>
        </section>
        {isActive && (
          <section className={style.accordionContent}>
            <article>
              <h5>Hvad modtager vi</h5>
              <hr />
              {data.types.map((item, index) => (
                <section key={index}>
                  {item.rules.is_allowed && (
                    <section>
                      <ul>
                        <p>{item.title}</p> <p>Ja tak</p>
                      </ul>
                    </section>
                  )}
                </section>
              ))}
              <h5>Hvad modtager vi ikke</h5>
              <hr />
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
        <section className={style.accordionBtn} onClick={() => setIsActive(!isActive)}>
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