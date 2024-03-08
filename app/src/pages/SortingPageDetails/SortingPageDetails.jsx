import style from './SortingPageDetails.module.scss';
import { useParams } from 'react-router-dom';
import { Accordion } from '../../components/Accordion/Accordion';
import { useFetch } from '../../hooks/useFetch';

export const SortingPageDetails = () => {
  // Get the ID parameter from the URL using React Router's 'useParams' hook
  const { id } = useParams();

  // Fetch data based on the ID parameter
  const {
    data: sectionData,
    loading: sectionLoading,
    error: sectionError,
  } = useFetch(`http://localhost:3000/section/${id}`);
  
  // console.log("Response:", sectionData);

  // Defining a style object to set the background color of the title container
  const titleContainerColor = {
    backgroundColor: sectionData ? `#${sectionData.color}` : "transparent",
  };

  return (
    <div className={style.pageContainer}>
      {/* This is the main section for sorting page details */}
      <section className={style.detailPage}>
        {/* Container for section details */}
        <article className={style.detailContainer}>
          {/* Display loading message while data is being fetched */}
          {sectionLoading && <div>Loading...</div>}
          {/* Display error message if there's an issue with the fetch */}
          {sectionError && <div>Error: {sectionError.message}</div>}
          {/* Display section details if data is available */}
          {sectionData && (
            <>
              {/* Our container for the title and image */}
              <div className={style.detailTitle}>
                {/* Display section title with upper styling and background color */}
                <h3 className={style.UpperStyle} style={titleContainerColor}>
                  {sectionData?.title}
                </h3>{" "}  {/* These Inserts a space character */}

                <img
                  className={style.trashImage}
                  src={sectionData?.filepath}
                  alt={sectionData?.title}
                />
              </div>
              {/* Our container for list of categories with accordions */}
              <ul className={style.accordionList}>
                {/* Map through section categories and render Accordion components */}
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