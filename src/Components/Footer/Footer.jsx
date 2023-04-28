import React from 'react';
import payment from '../../Assets/payment.png';
import useFetch from '../../Hooks/useFetch';
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer = ({item}) => {

  const {data, loading, error} = useFetch(`/contacts?populate=*`);

  return (
    <div className='footer'>
      <div className="top">
        <div className="items">
          <h3>Categories</h3>
          <div className="span">
            <Link><span>Filles</span></Link>
            <Link><span>Garçons</span></Link>
            <Link><span>Jouet</span></Link>
            <Link><span>Nouvel Arrivage</span></Link>
          </div>
        </div>
        <div className="items">
          <h3>Liens</h3>
          <div className="span">
            <Link><span>FAQ</span></Link>
            <Link to={"/product"}>
              <span>Boutiques</span>
            </Link>
            <Link><span>Compare</span></Link>
            <Link><span>Cookies</span></Link>
          </div>
        </div>
        <div className="items">
          <h3>A propos de nous</h3>
          <p>Univers d'amour" est une boutique en ligne spécialisée dans les vêtements pour bébés. Nous offrons une large gamme de vêtements pour les nourrissons, avec des designs mignons et confortables pour les petits.</p>
        </div>
        <div className="items">
          <h3>Contactez-nous</h3>
          {loading ? "loading" : data && data.map((item) => (
                            <div className="card">
                                <p>{item?.attributes?.valeur}</p>
                            </div>
                        )) 
                    }
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">UNIVER D'AMOUR</div>
        </div>
        <div className="center">&copy; Copyright 2023. Tous droits réservés.</div>
        <div className="right">
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer