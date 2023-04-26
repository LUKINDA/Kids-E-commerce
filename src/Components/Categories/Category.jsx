import React from 'react'
import useFetch from '../../Hooks/useFetch';
import axios from 'axios';
import './Category.scss'
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Category = ({item}) => {

    const {data, loading, error} = useFetch(`/categories?populate=*`);

  return (
    <div className='category_container container'>
        <div className="title">
            <h3>Acheter par categorie</h3>
            <div className="subtitle">
                <hr />
                <h2>Top categorie</h2>
                <hr />
            </div>
        </div>
        <div className="box">
          {loading ? "loading" : data.map((item) => (
            <>
            <Link className="card">
            <div >
                  <div className="image">
                      <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.img?.data?.attributes.url} alt="" />
                  </div>
                  <h3>{item?.attributes?.title}</h3>
              </div>
            </Link>
            </>
          ))}
        </div>
    </div>
  )
}

export default Category