
// RecyclingPageDetails
import { useEffect, useState } from 'react';
import style from './RecyclingPageDetails.module.scss';
import { useParams } from 'react-router-dom';
import ReviewStars from '../../components/ReviewStars/ReviewStars';

export const RecyclingPageDetails = () => {
  const { id } = useParams();
  const [sectionData, setSectionData] = useState(null);
  const [sectionLoading, setSectionLoading] = useState(true);
  const [sectionError, setSectionError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/reviews/${id}`);
        const data = await response.json();
  
        // We are checking if the returned data is an array or an object
        if (Array.isArray(data)) {
          // If it's an array, we are setting the first element as the sectionData
          setSectionData(data.length > 0 ? data[0] : null);
        } else {
          // If it's an object, setting it directly as the sectionData
          setSectionData(data);
        }
      } catch (error) {
        setSectionError(error);
      } finally {
        setSectionLoading(false);
      }
    };
  
    fetchData();
  }, [id]);
  

  return (
    <div className={style.pageContainer}>
      <h3>Recycling review page here</h3>

      <section className={style.detailPage}>
      <ReviewStars id={id} />
        <article className={style.detailContainer}>
          {sectionLoading && <div>Loading...</div>}
          {sectionError && <div>Error: {sectionError.message}</div>}
          {sectionData && (
            <div className={style.reviewDetail}>
              <h4>{sectionData?.user?.firstname}</h4>
              <p>{sectionData?.created_at}</p>
              <p>{sectionData?.subject}</p>
              <p>{sectionData?.comment}</p>
            </div>
          )}
        </article>
      </section>
    </div>
  );
};