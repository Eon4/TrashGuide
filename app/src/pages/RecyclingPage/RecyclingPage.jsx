import style from './RecyclingPage.module.scss';
import { useEffect, useState } from 'react';
import { RecyclingCard } from '../../components/RecyclingCard/RecyclingCard';
import { useNavigate } from 'react-router-dom';

export const RecyclingPage = () => {
  // A state to store the fetched recycling data
  const [sortedRecycle, setSortedRecycle] = useState([]);

  const navigate = useNavigate();

  // useEffect to fetch recycling data when the component mounts
  useEffect(() => {
    // Fetching recycling data from the API
    fetch('http://localhost:3000/orgs?attributes=id,name,address,zipcode,city')
      .then((res) => res.json())
      .then((data) => setSortedRecycle(data))
      .catch((err) => console.error(err));
  }, []);

  // A function to handle clicking on a recycling card and navigate to details page
  const handleClick = (id) => {
    // Navigate to RecyclingPageDetails with the selected ID
    navigate(`/recycling/${id}`);
  };

  return (
    <div className={style.SortMyRecyclingCard}>
      {sortedRecycle.map((item) => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          <RecyclingCard
            key={item.id}
            id={item.id}
            name={item.name}
            address={item.address}
            zipcode={item.zipcode}
            city={item.city}
          />
        </div>
      ))}
    </div>
  );
};