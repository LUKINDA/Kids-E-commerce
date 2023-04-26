import React, { Component } from 'react'
//import Link from 'react-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import './Main.scss'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'


import child1 from '../../Assets/child1.png'
import child2 from '../../Assets/child2.png'
import child3 from '../../Assets/child3.png'
import cloud from '../../Assets/cloud.png'

const Main = () => {
  return (
    <div className='main_container'>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay = {{delay: 5000}}
            speed={1500}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src={child1} alt="" />
                <div className="content card">
                    <h3>Nouveautés</h3>
                    <h2>Meilleure boutique pour enfants et magasin en ligne</h2>
                    <Link to="/products/:id" >Découvrir maintenant</Link>
                </div>
                <div className="deco">
                    <img src={cloud} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={child2} alt="" />
                <div className="content card">
                    <h3>Nouveautés</h3>
                    <h2>Tout ce dont vous avez besoin pour votre bébé</h2>
                    <Link to="/products/:id" >Découvrir maintenant</Link>
                </div>
                <div className="deco2">
                    <img src={cloud} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src={child3} alt="" />
                <div className="content card">
                    <h3>Nouveautés</h3>
                    <h2>Meilleure boutique pour enfants et magasin en ligne</h2>
                    <Link to="/products/:id" >Découvrir maintenant</Link>
                </div>
                <div className="deco">
                    <img src={cloud} alt="" />
                </div>
            </SwiperSlide>
        </Swiper></div>
  )
}

export default Main