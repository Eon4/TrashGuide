
// Order Page 
import { useEffect, useState } from 'react';
import style from './OrderPage.module.scss';
import { ShowMyContainerCard } from '../../components/ContainerCard/ContainerCard';

export const OrderPage = () => {
  const [orderContainer, setOrderContainer] = useState([]);

  useEffect(() => {
    // Fetch recycling data from the API
    fetch('http://localhost:3000/containers')
      .then((res) => res.json())
      .then((data) => setOrderContainer(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={style.OrderMyContainer}>
      {orderContainer.map((container) => (
        <ShowMyContainerCard 
        key={container.id} 
        id={container.id} 
        name={container.name} 
        icon={container.icon_filename} 
        />
      ))}
      <h1>Order Container Page</h1>
    </div>
  );
};
