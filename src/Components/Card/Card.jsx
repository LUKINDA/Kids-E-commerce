import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className='card'>
            <div className="image">
                {item?.attributes.isNew && <span>Nouveau</span>}
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt="" className='mainImg'/>
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
            </div>
            <div className="bottom_card">
            <h3>{item?.attributes.title}</h3>
            <div className="price">
                <h4>$ {(item?.attributes.oldPrice || item?.attributes?.price + 5).toFixed(2)}</h4>
                <h4>$ {item?.attributes.price}</h4>
            </div>
            </div>
        </div>
    </Link>
  )
}

export default Card;
