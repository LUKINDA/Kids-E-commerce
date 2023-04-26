import React from 'react'
import './About.scss'
import useFetch from '../../Hooks/useFetch';
import axios from 'axios';
import { Link } from 'react-router-dom';

import aboutImage1 from '../../Assets/shop6.JPG'
import aboutImage2 from '../../Assets/shop4.JPG'

const About = ({item}) => {

  const images = [
    aboutImage1, aboutImage2
];

    const {data, loading, error} = useFetch(`/apropos?populate=*`);

  return (
    <div className='about'>
        <section className="top">
            <span><Link to={"/"}>ACCEUIL /</Link> A PROPOS DE NOUS</span>
            <h2>A propos de nous</h2>
        </section>
        <section className="story">
            <div className="image">
            <img src={images[0]} alt="" />
            </div>
            <div className="content">
                <h2>Histoire & mission</h2>
                <p className='description'>
                Univers d'amour" est une boutique en ligne spécialisée dans les vêtements pour bébés. Nous offrons une large gamme de vêtements pour les nourrissons, avec des designs mignons et confortables pour les petits. Nous nous efforçons de fournir des produits de haute qualité à des prix abordables pour aider les parents à habiller leurs bébés avec style. Notre objectif est de rendre chaque bébé encore plus adorable et de créer des moments de bonheur pour les familles.
                </p>
                <h2 className='signature' id='signature'>UniversD'amour</h2>
            </div>
        </section>
        
        <section className="choose_us">
        {loading ? "loading" : data.map((item) => (
            <div className="card">
                <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.img?.data?.attributes.url} alt="" />
                <h3>{item?.attributes?.title}</h3>
                <p>
                    {item?.attributes?.desc}
                </p>
            </div>
        ))}
            
        </section>
        <section className="middle story">
            <div className="content">
                <h2>Notre philosophie</h2>
                <p className='description'>
                Notre philosophie est centrée sur la création d'un impact positif sur la vie de nos clients. Nous croyons que en fournissant des produits de haute qualité et abordables, nous pouvons faire la différence dans la façon dont les parents prennent soin de leurs bébés. 
                <br /><br />
                Notre objectif est de favoriser une communauté où les parents se sentent soutenus et autonomisés, et où leurs bébés peuvent s'épanouir. Nous sommes engagés à offrir un excellent service à la clientèle, et nous nous efforçons de rendre chaque expérience d'achat agréable. Au cœur de notre philosophie se trouve un profond amour et une appréciation des bébés, et le désir d'aider les familles à créer des souvenirs qui dureront toute une vie.
                </p>
                <Link to={"/products/:id"}>
                <button >Achetez maintenant</button>
                </Link>
            </div>
            <div className="image">
            <img src={images[1]} alt="" />
            </div>
        </section>
    </div>
  )
}

export default About