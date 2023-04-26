import React from 'react'
import { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.scss'

import Cart from '../Cart/Cart';
import Favorits from '../Favorits/Favorits';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

import logo from '../../Assets/logo.png'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const products = useSelector(state => state.cart?.products || []);

    const [openFavorits, setOpenFavorits] = useState(false)
    const products2 = useSelector(state => state.favorits?.products || []);

    
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <div className='navbar hero' >
      <div className="wrapper">
      <div className="left" id='menu' ref={navRef}>
            <div className="l_item">
              <Link to="/">Accueil</Link>
            </div>
            <div className="l_item">
              <Link to="/about">A propos</Link>
            </div>
            <div className="l_item">
              <Link to="/products/:id">Boutique</Link>
            </div>
            <div className="l_item">
              <Link to="/contacts">Contactes</Link>
            </div>
        </div>
        <div className="center">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className="right_menu">
        <div className="right">
          
          <div className="icons">
            <SearchIcon className='search'/>
            <PersonIcon className='user'/>
            <div className="favoritsIcon" onClick={()=>setOpenFavorits(!openFavorits)}>
              <FavoriteBorderIcon />
            </div>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
        <div className="toggle">
            <MenuIcon className="menu"  onClick={showNavbar}/>
          </div>
        </div>
      </div>
      <div className="items">
            <div className="item">
              <Link to="/products/1">Filles</Link>
            </div>
            <div className="item">
              <Link to="/products/2">Garçons</Link>
            </div>
            <div className="item">
              <Link to="products/3">Jouet</Link>
            </div>
          </div>
          {open && <Cart />}
          {openFavorits && <Favorits />}
    </div>
  )
}

export default Navbar