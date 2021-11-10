import React, {useState,useEffect} from 'react';
import axios from 'axios';
const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    const fetchApi = async () => {
      try {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`);
        setData(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    if (mounted) fetchApi();
    return () => (mounted = false);
  }, [setData]);
  const DATA=[
    {
      name: "main course",
      img : "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
      count : "5 Recipes",
    },
    {
      name: "side dish",
      img : "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
      count : "5 Recipes",
    },
    {
      name: "dessert",
      img :"https://www.themealdb.com/images/media/meals/xqqqtu1511637379.jpg",
      count : "5 Recipes",
    },
    {
      name: "appetizer",
      img :"https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg",
      count : "5 Recipes",
    },
    {
      name: "salad",
      img : "https://www.themealdb.com/images/media/meals/uttrxw1511637813.jpg",
      count : "5 Recipes",
    },
    {
      name: "bread",
      img : "https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg",
      count : "5 Recipes",
    },
    {
      name: "breakfast",
      img : "https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg",
      count : "5 Recipes",
    },
  ]
  return {
  data,
  DATA
  };
}
export default Home;