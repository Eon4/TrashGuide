// Order Page One
import { useEffect, useState } from 'react';
import style from './OrderPage.module.scss';
import { ShowMyContainerCard } from '../../components/ContainerCard/ContainerCard';
import { NavLink } from 'react-router-dom';

export const OrderPage = () => {
  const [orderContainer, setOrderContainer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/containers')
      .then((res) => res.json())
      .then((data) => setOrderContainer(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={style.OrderMyContainer}>
      {/* <div>
        <aside>
          Breaddrumb container here
        </aside>
      </div> */}
      <p className={style.stepText} >Trin 1</p>
      <h3 className={style.containerHeadline} >Vælg type</h3>
      <p>Tation argumentum et usu, dicit viderer evertitur te has. 
        Eu dictas <br /> concludaturque usu, facete detracto patrioque 
        an per, lucilius <br /> pertinacia eu vel.</p>
        <div className={style.OrderMyContainerWrapper} >

      {orderContainer.map((container) => (
        <ShowMyContainerCard 
        key={container.id} 
        id={container.id} 
        name={container.name} 
        icon={container.icon_filename} 
        />
      ))}
              </div>

  <NavLink to="/sendorder">
    <button className={style.orderButton}>
    Videre

    </button>
</NavLink>  
</div>
  );
};
