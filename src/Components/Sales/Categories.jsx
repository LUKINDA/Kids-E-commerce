import React from 'react'
import { Link } from "react-router-dom";
import './Categories.scss'

import image1 from '../../Assets/shop8.JPG'
import image2 from '../../Assets/shop9.JPG'
import image3 from '../../Assets/shop7.JPG'
import image4 from '../../Assets/shop11.JPG'
import image5 from '../../Assets/shop2.JPG'
import image6 from '../../Assets/shop4.JPG'

const Categories = () => {
  return (
    <div className='main_categories'>
        <div className="col col_top">
            <div className="row">
                <img src={image1} alt="" />
                <button>
                    <Link className='link' to="/products/1">Vente</Link>
                </button>
            </div>
            <div className="row">
                <img src={image2} alt="" />
                <button>
                    <Link className='link' to="/products/1">Filles</Link>
                </button>
            </div>
        </div>
        <div className="col col_middle">
            <div className="row">
                <img src={image3} alt="" />
                <button>
                    <Link className='link' to="/products/1">Garcons</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src={image4} alt="" />
                        <button>
                            <Link className='link' to="/products/1">jouet</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src={image5} alt="" />
                        <button>
                            <Link className='link' to="/products/1">cosmetiques</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src={image6} alt="" />
                <button>
                    <Link className='link' to="/products/1">Vente</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories