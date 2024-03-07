
// Order Page Part Two
import { useEffect, useState } from 'react';
import style from './OrderPage.module.scss';
// import { Form } from '../../components/Form/Form';

export const OrderPageTwo = () => {
  const [orderMyContainer, setOrderMyContainer] = useState([]);

  useEffect(() => {
    // Fetch containers data from the API
    fetch('http://localhost:3000/orders')
      .then((res) => res.json())
      .then((data) => setOrderMyContainer(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={style.OrderMyContainer}>
      <p>Trin 2</p>
      <h3>Hvor skal den leveres?</h3>
      <p>Tation argumentum et usu, dicit viderer evertitur te has. 
        Eu dictas <br /> concludaturque usu, facete detracto patrioque 
        an per, lucilius <br /> pertinacia eu vel.</p>
        <div className={style.OrderMyContainerWrapper} >

        {/* <Form */}
        {/* key={container.id} 
        id={container.id} 
        name={container.name} 
        icon={container.icon_filename}  */}
        {/* /> */}
              </div>

<button className={style.sendButton} >
  Send
  </button>    
</div>
  );
};
