import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Featured.scss';
import useFetch from '../../Hooks/useFetch';
import axios from 'axios';

const Featured = ({ type }) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`,
  //         {
  //           headers: {
  //             Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
  //           },
  //         }
  //       );setData(res.data.data)
  //     } catch (err) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>{type}</h2>
        <p>
          Proposant des designs adorables et des matériaux confortables pour vos enfants
        </p>
      </div>
      <div className="bottom">
        {loading ? "loading" : data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
