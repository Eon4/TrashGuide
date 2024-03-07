//Inspiration from earlier project with Kasper: https://github.com/Eon4/WallyWoodProject/blob/main/wood/src/Pages/SignUp.jsx
import style from "./form.module.scss";

const sendForm = () => {
  
    return (
      <>  
        <form className = {style.sendFormStyle}>
      <label>
        <input {...register("firstname", { required: true })} />
        {errors.firstname && <span>Feltet skal udfyldes</span>}
      </label>
      <label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Feltet skal udfyldes</span>}
      </label>
      <label>
  <input type="tel" {...register("phone", { required: true })} />
  {errors.phone && <span>Feltet skal udfyldes</span>}
</label>

      <label>
        <input type="address" {...register("address", { required: true })} />
        {errors.address && <span>Feltet skal udfyldes</span>}
      </label>
    </form>
      </>
    );
  };
  

export default sendForm;