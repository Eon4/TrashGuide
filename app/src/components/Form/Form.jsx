//Inspiration from earlier project with Kasper: https://github.com/Eon4/WallyWoodProject/blob/main/wood/src/Pages/SignUp.jsx

import { useForm } from 'react-hook-form';
import style from './Form.module.scss';

export const SendForm = ({ id, onChange }) => {
  const {  register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: data.name,
          address: data.address,
          zipcode: data.zipcode, 
          city: data.city,
          email: data.email,
          phone: data.phone,
          container_id: data.container_id,
        }),
      });
  
      if (response.ok) {
        // Handle successful submission
        console.log('Form submitted successfully');
      } else {
        // Handle error response
        console.error('Error submitting form');
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error during form submission:', error);
    }
  };
  
  return (
    <form className={style.sendFormStyle} onSubmit={handleSubmit(onSubmit)}>
      <label>
        
              <input type='text' placeholder='Navn' {...register("name", { required: true })} />
              {errors.name && <span>Feltet skal udfyldes</span>}
      </label>

      <label>
        <input type="email" placeholder='Email' {...register("email", { required: true })} />
        {errors.email && <span>Feltet skal udfyldes</span>}
      </label>

      <label>
        <input type="tel" placeholder='Telefon' {...register("phone", { required: true })} />
        {errors.phone && <span>Feltet skal udfyldes</span>}
      </label>

      <label>
        <input type="text" placeholder='Addresse' {...register("address", { required: true })} />
        {errors.address && <span>Feltet skal udfyldes</span>}
      </label>

      <label>
        <input type="text" placeholder='Postnummer' {...register("zipcode", { required: true })} />
        {errors.zipcode && <span>Feltet skal udfyldes</span>}
      </label>

      <label>
        <input type="text" placeholder='By' {...register("city", { required: true })} />
        {errors.city && <span>Feltet skal udfyldes</span>}
      </label>

      <button type="submit">Send</button>
    </form>
  );
};


