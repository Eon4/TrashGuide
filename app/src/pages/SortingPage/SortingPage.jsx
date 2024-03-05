// SortingPage
import { useEffect, useState } from 'react';
import style from './SortingPage.module.scss';
import SortMyTrashCard from './../../components/SortMyTrash/SortMyTrash';

export const SortingPage = () => {
  const [trash, setTrash] = useState([]);

  useEffect(() => {
    // Fetch the list of trash types
    fetch('http://localhost:3000/section')
      .then((res) => res.json())
      .then((data) => setTrash(data))
      .catch((err) => console.error(err));
  }, []);

  // Define the custom order of ids
  const customOrder = [12, 9, 6, 5, 8, 3, 11, 1, 10, 7, 4, 2];

  // Sort the categories based on the custom order
  const sortedTrash = [...trash].sort((a, b) => customOrder.indexOf(a.id) - customOrder.indexOf(b.id));

  return (
    <>

    <h3>Din guide</h3>
    <h3>til en sund affaldssortering</h3>

    <div className={style.SortMyTrashWrapper}>
      {sortedTrash.map((item) => (
        <SortMyTrashCard
          key={item.id}
          id={item.id}
          title={item.title}
          filename={item.filename}
          filepath = {item.filepath}
          color={item.color}
        />
      ))}
    </div>
    </>
  );
};
