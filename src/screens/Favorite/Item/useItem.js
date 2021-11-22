import React, {useState, useEffect} from 'react';
import axios from 'axios';
const useItem = idMeal => {
  const [data, setData] = useState(null)
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
        );
        const dataCategory = res.data.meals
        setData(dataCategory[0]);
      } catch (error) {
        console.log(error);
      }
    };
    if (mounted) fetchApi();
    return () => (mounted = false);
  }, [idMeal]);
  return {
    data,
  };
};
export default useItem;
