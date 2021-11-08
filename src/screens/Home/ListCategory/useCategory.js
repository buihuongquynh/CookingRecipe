import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Home = () => {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   let mounted = true;
  //   const fetchApi = async () => {
  //     try {
  //       const res = await axios.get(`https://api.spoonacular.com/food/menuItems/search?query=burger&number=10&apiKey=e6beba81f7984acab62debe63218e505`);
  //       setData(res.data.menuItems);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (mounted) fetchApi();
  //   return () => (mounted = false);
  // }, [setData]);
  const DATA = [
    {
      id: '1',
      name: 'main course',
      img: 'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
      count: '5 Recipes',
    },
    {
      id: '2',
      name: 'side dish',
      img: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
      count: '5 Recipes',
    },
    {
      id: '3',
      name: 'dessert',
      img: 'https://www.themealdb.com/images/media/meals/xqqqtu1511637379.jpg',
      count: '5 Recipes',
    },
    {
      id: '4',
      name: 'appetizer',
      img: 'https://www.themealdb.com/images/media/meals/uttupv1511815050.jpg',
      count: '5 Recipes',
    },
    {
      id: '5',
      name: 'salad',
      img: 'https://www.themealdb.com/images/media/meals/uttrxw1511637813.jpg',
      count: '5 Recipes',
    },
    {
      id: '6',
      name: 'bread',
      img: 'https://www.themealdb.com/images/media/meals/ewcikl1614348364.jpg',
      count: '5 Recipes',
    },
    {
      id: '7',
      name: 'breakfast',
      img: 'https://www.themealdb.com/images/media/meals/o7p9581608589317.jpg',
      count: '5 Recipes',
    },
  ];
  return {
    // data,
    DATA,
  };
};
export default Home;
