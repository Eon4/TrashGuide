// My container card component
import style from './ContainerCard.module.scss';
import { useEffect, useState } from 'react';
import restaffaldIcon from '../../assets/image/Icons/restaffald.svg';
import papogpapirIcon from '../../assets/image/Icons/papogpapir.svg';
import waterBottleIcon from '../../assets/image/Icons/water-bottle.svg';
import batteryIcon from '../../assets/image/Icons/battery.svg';

export const ShowMyContainerCard = ({ id, name, icon_filename }) => {
  const [iconContent, setIconContent] = useState('');

//DIFFERENCE BETWEEN LET AND CONST
  let icon;
  switch (id) {
    case 1:
      icon = restaffaldIcon;
      break;
    case 2:
      icon = papogpapirIcon;
      break;
    case 3:
      icon = waterBottleIcon;
      break;
    case 4:
      icon = batteryIcon;
      break;

    default:
      icon = null; // Can set an default icon or handle the case, if the id doesn't match any known icons
  }

  useEffect(() => {
    let url = `http://localhost:3000/containers/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIconContent(data.svg_content);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className={style.MyContainerCard}>
      {icon && <img src={icon} alt={`${name} Icon`} />}

      <section>
        <h5>{name}</h5>
      </section>
    </div>
  );
};