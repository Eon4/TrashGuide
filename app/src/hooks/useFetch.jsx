//useFetch from an another assignment: https://github.com/Eon4/Hotel-Overlook/blob/main/hotel/src/hooks/useFetch.jsx
import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    fetch (url)
    .then((res) => res.json()) 
    .then((data) =>{
     setData(data);
     setLoading(false);
    //  console.log(data)
    })
    .catch((err) => {
        setError(err.message);
        setLoading(false);
    });
}, [url]);

return { data, loading, error };
};
