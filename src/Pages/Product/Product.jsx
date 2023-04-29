import React, { useState } from 'react'
import { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'

import './Product.scss'

import { AddShoppingCart } from '@mui/icons-material'
import { FavoriteBorder } from '@mui/icons-material'
import { Balance } from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Redux/cartReducer'

const Product = () => {

  const dispatch = useDispatch()

  const id = useParams().id;

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const [activeFilter, setActiveFilter] = useState('desc');
  const handleFilterClick = (id) => {
    setActiveFilter(id);
  };

  const {data, loading, error} = useFetch(
    `/products/${id}?populate=*`
    );
    //console.log(data)
  return (
    <div className='product'>
      {loading ? "loading" : (
        <>
          <div className="left">
            <div className="images">
              <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" 
                    onClick={(e)=>setSelectedImg("img")}/>
              <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" 
                    onClick={(e)=>setSelectedImg("img2")} />
            </div>
            <div className="mainImg">
              <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
            </div>
      </div>
      <div className="right">
        <h2>{data?.attributes?.title}</h2>
        <span >{data?.attributes?.type}</span>
        <div className="price">
          <h2>{data?.attributes?.price}</h2>
          {data?.attributes?.discount && <span className='discount'>Reduction</span>}
        </div>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev) => prev === 1 ? 1 : prev-1)}>-</button>
          <h2>{quantity}</h2>
          <button onClick={()=>setQuantity(prev => prev+1)} >+</button>
        </div>
        <div className="buttons">
          <button className='add' onClick={() => dispatch(addToCart({
            id:data.id,
            title:data.attributes.title,
            desc:data.attributes.desc,
            price:data.attributes.price,
            img:data.attributes.img.data.attributes.url,
            quantity,
          }))}>
            <AddShoppingCart/> Ajouter au panier
          </button>
        </div>
        <div className="link">
          <div className="item">
            <FavoriteBorder/> Ajouter à la liste de souhaits
          </div>
          <div className="item">
            <Balance /> Ajouter pour comparer
          </div>
        </div>
        <hr />
        <div className="filter_container">
          <div className="filter">
            <span className={activeFilter === 'desc' ? 'active' : ''} id="desc" onClick={() => handleFilterClick('desc')}>Description</span>
            <span className={activeFilter === 'taille' ? 'active' : ''} id="taille" onClick={() => handleFilterClick('taille')}>Taille</span>
            <span className={activeFilter === 'livrason' ? 'active' : ''} id="livrason" onClick={() => handleFilterClick('livrason')}>Livraison</span>
          </div>
          <div className="content">
            <div className={activeFilter === 'desc' ? 'show' : 'hide'}>
              <div className="info">
                <span>{data?.attributes?.desc}</span>
              </div>
            </div>
            <p className={activeFilter === 'taille' ? 'show' : 'hide'}>
            {data?.attributes?.taille}
            </p>
            <p className={activeFilter === 'livrason' ? 'show' : 'hide'}>
            {data?.attributes?.livraison}
            </p>
          </div>
        </div>
        <hr />
        <div className="details">
          <span>description</span>
          <span>informations supplémentaires</span>
          <span>FAQ</span>
        </div>
      </div>
        </>
      )}
    </div>
  )
}

export default Product