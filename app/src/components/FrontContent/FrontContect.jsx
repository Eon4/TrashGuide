// Content for Frontpage - Functionel component 
import style from './FrontContent.module.scss';
import { useNavigate } from 'react-router-dom';
import trashFront from '../../assets/image/FrontImages/trashFront.jpg';
import binFront from '../../assets/image/FrontImages/BinFront.jpg';

export const FrontContent = () => {
    // Creatinging a navigate function from React Router
    const navigate = useNavigate();

    // Here we handling click to navigate to the sorting page
    const handleSortingClick = () => {
      navigate('/sorting');
    };

    // Here we handling click to navigate to the order page
    const handleLoginClick = () => {
      navigate('/order');
    };
  
    // Returning the content for the FrontContent component
    return (
        <>
            {/* First container with guide to sorting */}
            <div className={style.FrontContainer01}>
                <div className={style.Container02}>
                    {/* Heading and description for sorting guide */}
                    <h2>Din guide til sortering</h2>
                    <p>
                        Her kan du se hvordan du skal sortere og hvad der skal i <br />
                        hvilke beholdere. Du får også tips og tricks til, hvordan du <br />
                        gør det nemt at sortere hjemme hos dig.
                    </p>
                    
                    {/* Buttons to navigate to the Affaldsguide and order storskrald */}
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

            {/* Second container with information about ordering a new waste container */}
            <div className={style.FrontContainer02}>
                <img src={binFront} alt="binFront" className={style.FrontImage} />
                <div className={style.Container01}>
                    {/* Description for ordering a new waste container */}
                    <h2>Bestil din nye affaldsbeholder</h2>
                    <p>
                        when an unknown printer took a galley of type and 
                        scramble it to make a <br />
                        type specimen book. It has survived not only
                    </p>

                    {/* Button to navigate to the order page */}
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

