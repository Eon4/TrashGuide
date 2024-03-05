//Accordian is from a combelation with other developers in a code Challenge: https://github.com/Eon4/CodeChallenge/tree/main/code/src/Components/Accordion 
// SortingPageDetails
import React from 'react'; // Don't forget to import React
import style from './SortingPageDetails.module.scss';
import { useParams } from 'react-router-dom';
import { Accordion } from '../../components/Accordion/Accordion';
import { useFetch } from '../../hooks/useFetch';

export const SortingPageDetails = () => {
  const { id } = useParams();

  const {
    data: detailsData,
    loading: sectionLoading,
    error: sectionError,
  } = useFetch(`http://localhost:3000/section/${id}`);
  
  console.log("URL:", `http://localhost:3000/section/${id}`);
  console.log("Response:", detailsData);

  return (
    <>
      <section className={style.TrashDetailsCard}>
        {detailsData && (
          <>
            <h3>{detailsData.title}</h3>
            <img src={detailsData.filepath} alt={detailsData.title} />
            <div>
              {detailsData.categories && detailsData.categories.map(category => (
                <div key={category.id}>
                  <h4>{category.title}</h4>
                  <img src={category.icon_filepath} alt={category.title} />
                  <ul className={style.accordionList}>
                    {detailsData.categories.map(subcategory => (
                      <Accordion
                        key={subcategory.id}
                        id={subcategory.id}
                        img={subcategory.icon_filepath}
                        title={subcategory.title}
                        filepath={subcategory.image_filepath}
                      />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
  

  }