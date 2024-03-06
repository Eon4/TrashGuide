// My container card component
import style from './ContainerCard.module.scss';
import { useEffect, useState } from 'react';

export const ShowMyContainerCard = ({ id, name, icon_filename }) => {
  const [container, setContainer] = useState({});

  useEffect(() => {
    // Fetch additional details for each trash type using the id
    let url = `http://localhost:3000/section/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContainer(data))
      .catch((err) => console.error(err));
  }, [id]);

  // Render component
  return (
    <div className={style.MyContainerCard}>
<img src={icon_filename} alt={name} />
      <section>
        <h3>{name}</h3>
        
      </section>
    </div>
  );
};

