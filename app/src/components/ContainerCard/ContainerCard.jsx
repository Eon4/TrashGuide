import style from './ContainerCard.module.scss';
import { useEffect, useState } from 'react';
import restaffaldIcon from '../../assets/image/Icons/restaffald.svg';
import papogpapirIcon from '../../assets/image/Icons/papogpapir.svg';
import waterBottleIcon from '../../assets/image/Icons/water-bottle.svg';
import batteryIcon from '../../assets/image/Icons/battery.svg';

export const ShowMyContainerCard = ({ id, name, icon_filename }) => {
  // State to manage icon content
  const [iconContent, setIconContent] = useState('');

  // This ia a switch statement to determine which icon to use based on container ID
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
  }

  // Fetch container data from the API when component mounts or ID changes
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
            <section>

      <img src={icon} alt={`${name} Icon`} />
      <input className={style.checkBox} type="checkbox" />

      {/* <input className={style.radioButton} type="radio" /> */}
        <h6 className={style.ContainerCardText} >{name}</h6>
      </section>
    </div>
  );
};