import React, {useState, useEffect} from 'react';
import axios from 'axios';
const useItem = idMeal => {
  const [data, setData] = useState(null)
  const [dataNew, setDataNew] = useState(null)
  useEffect(() => {
    let mounted = true;
    const fetchApiFa = async () => {
      try {
        const res = await axios.get(
          `https://5f5f7492df620f00163e5bdc.mockapi.io/api/products`,
        );
        setDataNew(res.data);
      } catch (error) {
        console.log(error);
      }
    };
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
    if (mounted) {fetchApi();fetchApiFa()}
    return () => (mounted = false);
  }, [idMeal]);
  
  const deleteFa = async id => {
    try {
      console.log(id,"iddat")
      await axios.delete(`https://5f5f7492df620f00163e5bdc.mockapi.io/api/products/${id}`);
      console.log("xoa thanh cong")
    } catch (error) {
      console.log(id)
      console.log(error);
      console.log('xoa loi roi ');
    }
    if (mounted) fetchApi();
    return () => (mounted = false);
  };
  const addItem = async(data) =>{
    try {
      console.log(data)
      await axios.post(`https://5f5f7492df620f00163e5bdc.mockapi.io/api/products`, data);
     console.log("da them thanh cong")
    } catch (error) {
      console.log(error);
    }
  }
  return {
    data,
    deleteFa,
    addItem,
    dataNew
  };
};
export default useItem;
