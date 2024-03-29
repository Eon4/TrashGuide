import { useEffect, useState } from 'react';
import style from './OrderPage.module.scss';
import { SendForm } from '../../components/Form/Form';

export const OrderPageTwo = () => {
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    // Fetch data from the API for POST endpoint
    fetch('http://localhost:3000/orders')
      .then((res) => res.json())
      .then((data) => setMyOrder(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={style.OrderMyContainer}>
      <p className={style.stepText}>Trin 2</p>
      <h3 className={style.containerHeadline}>Hvor skal den leveres?</h3>
      <p>
        Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas
        <br /> concludaturque usu, facete detracto patrioque an per, lucilius
        <br /> pertinacia eu vel.
      </p>
      <div className={style.OrderMyContainerWrapper}>
        {/* Render the SendForm component if there is data */}
        {myOrder.length > 0 && <SendForm key={myOrder[0].id} />}
      </div>
    </div>
  );
};
