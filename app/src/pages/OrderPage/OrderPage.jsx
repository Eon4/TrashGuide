import { useEffect, useState } from 'react';
import style from './OrderPage.module.scss';
import { ShowMyContainerCard } from '../../components/ContainerCard/ContainerCard';
import { NavLink } from 'react-router-dom';

export const OrderPage = () => {
  // A state to store the available order container data
  const [orderContainer, setOrderContainer] = useState([]);

  // useEffect to fetch order container data when the component mounts
  useEffect(() => {
    fetch('http://localhost:3000/containers')
      .then((res) => res.json())
      .then((data) => setOrderContainer(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={style.OrderMyContainer}>
      <p className={style.stepText} >Trin 1</p>
      <h3 className={style.containerHeadline} >Vælg type</h3>
      <p>Tation argumentum et usu, dicit viderer evertitur te has. 
        Eu dictas <br /> concludaturque usu, facete detracto patrioque 
        an per, lucilius <br /> pertinacia eu vel.</p>
        
      {/* Wrapper for displaying order container cards */}
      <div className={style.OrderMyContainerWrapper} >
        {/* Mapping over the orderContainer array and rendering ShowMyContainerCard components */}
        {orderContainer.map((container) => (
          <ShowMyContainerCard 
            key={container.id} 
            id={container.id} 
            name={container.name} 
            icon={container.icon_filename} 
          />
        ))}
      </div>

      {/* Button to navigate to the next step in the order process */}
      <NavLink to="/sendorder">
        <button className={style.orderButton}>
          Videre
        </button>
      </NavLink>  
    </div>
  );
};