// RecyclingCard component
import style from './RecyclingCard.module.scss';
import { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import map0 from '../../assets/image/mapImages/map0.png'
import map1 from '../../assets/image/mapImages/map1.png'
import map2 from '../../assets/image/mapImages/map2.png'
import map3 from '../../assets/image/mapImages/map3.png'
import map4 from '../../assets/image/mapImages/map4.png'
import map5 from '../../assets/image/mapImages/map5.png'
import ReviewStars from '../../components/ReviewStars/ReviewStars';

export const RecyclingCard = ({ id, name, address, zipcode, city, longitude, latitude }) => {
  const [station, setStation] = useState(null);
  const mapImages = [map0, map1, map2, map3, map4, map5];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data for a specific recycle station using the ID
        const response = await fetch(`http://localhost:3000/orgs/${id}`);
        const data = await response.json();
        console.log('Fetched data:', data);
        setStation(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);


  return (
    <div>
      <section className={style.ShowMyRecycleCard}>
        <img className={style.mapName}
          src={mapImages[id - 1]}  // Here we are subtracting 1 to match the array index

        />
        {station && (
          <>
            <p>{name}</p>
            <p>{address}</p>
            <p>{zipcode}</p>
            <p>{city}</p>
            {id && <ReviewStars id={id} />}
          </>
        )}
      </section>
    </div>
  );
};




