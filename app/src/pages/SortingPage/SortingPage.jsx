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

  // Defining the custom order of IDs
  const customOrder = [12, 9, 6, 5, 8, 3, 11, 1, 10, 7, 4, 2];

  // Sorting the categories based on the custom order
  const sortedTrash = [...trash].sort((a, b) => customOrder.indexOf(a.id) - customOrder.indexOf(b.id));

  return (
    <>
    <h3 className={style.dinGuide}>Din guide</h3>
    <h3 className={style.sundAffald}>til en sund affaldssortering</h3>

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
