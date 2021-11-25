import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?f=f`,
        );
        setData(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    if (mounted) fetchApi();
    return () => (mounted = false);
  }, []);
  return {
    data,
  };
};
export default Home;
