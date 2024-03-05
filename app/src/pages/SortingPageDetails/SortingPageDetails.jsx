//Accordian is from a combelation with other developers in a code Challenge: https://github.com/Eon4/CodeChallenge/tree/main/code/src/Components/Accordion 
// SortingPageDetails component
// SortingPageDetails component
import { useState, useEffect } from "react";
import style from './SortingPageDetails.module.scss';
import { useParams } from 'react-router-dom';

export const SortingPageDetails = () => {
    const { id } = useParams(); // Get the section_id parameter from the URL
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrashData = async () => {
            try {
                const trashResponse = await fetch(`http://localhost:3000/section/${id}`).then(res => res.json());
                console.log("URL:", `http://localhost:3000/section/${id}`);
                console.log("Response:", trashResponse);

                // Check if the response is an array or object based on your API
                if (Array.isArray(trashResponse)) {
                    // Assuming it's an array, you can access the first item
                    setDetails(trashResponse[0]);
                    setLoading(false);
                } else if (typeof trashResponse === 'object' && trashResponse !== null) {
                    // Assuming it's an object
                    setDetails(trashResponse);
                    setLoading(false);
                } else {
                    setError("Failed to fetch trash data");
                    setLoading(false);
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchTrashData();
    }, [id]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {details && (
                <section className={style.TrashDetailsCard}>
                    <h3>{details.title}</h3>
                    <img src={details.filepath} alt={details.title} />
                    <div>
                        {/* Display the category details */}
                        {details.categories.map(category => (
                            <div key={category.id}>
                                <h4>{category.title}</h4>
                                {/* <img src={category.image_filepath} alt={category.title} /> */}
                                <img src={category.icon_filepath} alt={category.title} />

                                {/* Display other details as needed */}
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};
