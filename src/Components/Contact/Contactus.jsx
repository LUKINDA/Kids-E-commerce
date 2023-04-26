import React from 'react'
import { Facebook } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Google } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import './Contactus.scss'

const Contactus = () => {
  return (
    <div className='contactus'>
      <div className="wrapper">
        <span>RESTEZ EN CONTACT AVEC NOUS:</span>
        <div className="mail">
          <input type="text" placeholder="Entrez votre adresse e-mail..." />
          <button>REJOIGNEZ-NOUS</button>
        </div>
        <div className="icons">
          <Facebook />
          <Instagram />
          <Google />
          
        </div>
      </div>
    </div>
  )
}

export default Contactus