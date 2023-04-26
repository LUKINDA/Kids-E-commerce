import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import List from '../../Components/List/List'
import './Products.scss'

import useFetch from '../../Hooks/useFetch';
import axios from 'axios';

import child2 from '../../Assets/child2.png'

const Products = () => {

  const catid = useParams().id;
  const [maxPrice, setMaxPrice] = useState(100)
  const [sort, setSort] = useState(null)

  const [selectedSubCats, setSelectedSubCats] = useState([])


  const {data, loading, error} = useFetch(
    `/subcategories?[filter][categories][id]=${catid}`
    );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
  
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  console.log(selectedSubCats)
  
  

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h3>Catégories de produits</h3>
          {data?.map(item=>(
            <div className="inputItem" key={item.catid}>
            <input type="checkbox" name={item.id} id={item.id} value={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item?.attributes.title}</label>
          </div>
          ))}
          
        </div>
        <div className="filterItem">
          <h3>Filtrer par prix</h3>
          <div className="inputItem">
            <div className="pricelevel">
            <span>{maxPrice}</span>
            <span>$</span>
            </div>
            <input type="range" name="" id="" min={0} max={100} onChange={(e)=>setMaxPrice(e.target.value)}/>
          </div>
        </div>
        <div className="filterItem">
          <h3>Trier par</h3>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="cardImg">
          <div className="left_inner">
          <h2>Obtenez jusqu'à 20% de réduction sur vos vêtements sélectionnés.</h2>
          <h3>Achetez-maintenant la meilleure qualité</h3>
          </div>
          <div className="image">
            <img src={child2} alt="" />
          </div>
        </div>
        <div className="list">
          <List catid={catid} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
        </div>
      </div>
    </div>
  )
}

export default Products