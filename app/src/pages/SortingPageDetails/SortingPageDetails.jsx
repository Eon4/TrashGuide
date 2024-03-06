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
    data: sectionData,
    loading: sectionLoading,
    error: sectionError,
  } = useFetch(`http://localhost:3000/section/${id}`);
  
  // console.log("URL:", `http://localhost:3000/section/${id}`);
  // console.log("Response:", sectionData);

  const titleContainerColor = {
    backgroundColor: sectionData ? `#${sectionData.color}` : "transparent",
  };


  return (
    <div className={style.pageContainer}>

    <section className={style.detailPage}>
      <article className={style.detailContainer}>
        {sectionLoading && <div>Loading...</div>}
        {sectionError && <div>Error: {sectionError.message}</div>}
        {sectionData && (
          <>
            <div  className={style.detailTitle}>
              <h3 style={titleContainerColor}>{sectionData?.title}</h3>{" "}
              <img src={sectionData?.filepath} alt={sectionData?.title} />
            </div>
            <ul className={style.accordionList}>
              {sectionData.categories.map((category) => (
                <Accordion
                  key={category.id}
                  id={category.id}
                  imgSrc={category.icon_filepath}
                  title={category.title}
                />
              ))}
            </ul>
          </>
        )}
      </article>
    </section>
    </div>
  );
};