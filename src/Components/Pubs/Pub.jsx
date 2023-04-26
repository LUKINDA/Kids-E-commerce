import React from 'react'
import './Pub.scss'
import useFetch from '../../Hooks/useFetch';
import axios from 'axios';

const Pub = () => {

    const {data, loading, error} = useFetch(`/pubs?populate=*`);

  return (
    <div className='publicites'>
        <div className="container2">
            {loading ? "loading" : data.map((item) => (
                    <div className="cardPub">
                        <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.img?.data?.attributes.url} alt="" />
                        <div className="desc">
                            <span>{item?.attributes?.desc}</span>
                            <h3>{item?.attributes?.title}</h3>
                        </div>
                    </div>
                )) 
            }
        </div>
    </div>
  )
}

export default Pub
