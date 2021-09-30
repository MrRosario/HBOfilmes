import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        
        const fetchData = async () => {
          try {
            const res = await await fetch(url);
            const data = await res.json();;
    
            setApiData(data);
            setIsLoading(false);
          } catch (error) {
            console.log("error: ", error)
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, [url]);
    
      return { isLoading, apiData };
}
    
export default useFetch;