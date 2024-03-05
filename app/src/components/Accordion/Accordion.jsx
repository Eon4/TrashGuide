//Accordion component 
import React, { useEffect, useState } from 'react';
import style from './Accordion.module.scss';
import {useFetch} from '../../hooks/useFetch';


export const Accordion = ({ id, title, filepath, img }) => {
    const [isActive, setIsActive] = useState(false);

    const { data, loading, error } = useFetch(
        `http://localhost:3000/category/details/${id}`
    );
    console.log("Rendering Accordion:", title);  


    return (
        <section className={style.accordionContainer}>
            <section
                className={style.accordionTitle}
                onClick={() => setIsActive(!isActive)}
            >
                <img src={filepath} alt={title} />
                <h4>{title}</h4>
                <button onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'Close' : 'Open'}
                </button>
            </section>
            {isActive && (
                <section className={style.accordionContent}>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {data && (
                        <article>
                            <h5>Hvad modtager vi</h5>
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
                            {data.types.map((item, index) => (
                                <section key={index}>
                                    {item.rules.is_allowed && (
                                        <section>
                                            <p>{item.title}</p> <p>Nej tak</p>
                                        </section>
                                    )}
                                </section>
                            ))}
                        </article>
                    )}
                </section>
            )}
        </section>
    );
};

