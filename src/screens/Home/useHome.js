import React, {useState,useEffect} from 'react';
import axios from 'axios';
const useHome = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (mounted) fetchApi();
    return () => (mounted = false);
  }, [setData]);
  return {
  data
  };
};
export default useHome;