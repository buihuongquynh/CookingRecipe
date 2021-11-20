import React, {useState, useEffect} from 'react';
import axios from 'axios';
const useFavorite = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(
          `https://5f5f7492df620f00163e5bdc.mockapi.io/api/products`,
        );
        setData(res.data);
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
export default useFavorite;
