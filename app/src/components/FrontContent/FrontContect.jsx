//Front Conent for the frontpage
import style from './FrontContent.module.scss';
import { useNavigate } from 'react-router-dom';
import trashFront from '../../assets/image/FrontImages/trashFront.jpg';
import binFront from '../../assets/image/FrontImages/BinFront.jpg';

export const FrontContent = () => {

    const navigate = useNavigate();
    const handleSortingClick = () => {
      navigate('/sorting');
    };
  
    const handleLoginClick = () => {
      navigate('/order');
    };
  
    
    return (
        <>
                <div className={style.FrontContainer01}>
                <div className={style.Container02}>

         <h2>Din guide til sortering</h2>
       <p>Her kan du se hvordan du skal sortere og hvad der skal i <br />
        hvilke beholdere. Du får også tips og tricks til, hvordan du <br />
        gør det nemt at sortere hjemme hos dig.</p>

      <li>
        <button onClick={handleSortingClick}>
        Se Affaldsguide
        </button>
      </li>
      <li>
        <button onClick={handleLoginClick}>
        Bestil storskrald
        </button>
      </li>
      </div>

    <img src={trashFront} alt="trashFront" className={style.FrontImage} />
    </div>

    <div className={style.FrontContainer02}>
    <img src={binFront} alt="binFront" className={style.FrontImage} />
    <div className={style.Container01}>

    <h2>Bestil din nye affaldsbeholder</h2>
       <p>when an unknown printer took a galley of type and 
        scramble it to make a <br />
        type specimen book. It has survived not only</p>

      <li>
        <button onClick={handleLoginClick}>
        Bestil nu
        </button>
      </li>
      </div>

    </div>


        </>
      
    );
};

