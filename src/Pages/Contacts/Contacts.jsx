import React from 'react'

import { Link } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import axios from 'axios'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { WhatsApp } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Telegram } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import { Send } from '@mui/icons-material'

import './Contact.scss'


const Contacts = ({item}) => {

    const {data, loading, error} = useFetch(`/contacts?populate=*`);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_llgagpe', 'template_z6mfr4f', form.current, 'mmrRUOw1rRVK9vGID')
        .then((result) => {
            console.log("sent");
            toast.success ("Message envoyé", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            form.current.rest();
        }, (error) => {
            console.log(error.text);
            toast.error ("Désolé, message non envoyé", {
                position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
            });
        });
    };

  return (
    <div className='contact'>
        <div className="top">
            <span>
                <Link to={"/"}>ACCUIEL /</Link>
                  CONTACTEZ NOUS
            </span>
            <h1>contactez nous</h1>
        </div>
        <div className="middle">
            <h2>Avez-vous une question?</h2>
            <p>
            Bonjour et bienvenue sur la page de contact de Univers d'Amour, la boutique en ligne pour bébés et jeunes enfants. Nous sommes ravis de vous aider avec toutes vos questions et préoccupations. N'hésitez pas à nous contacter par téléphone, e-mail ou via le formulaire de contact ci-dessous. Nous vous répondrons dans les plus brefs délais. Merci beaucoup pour votre confiance et votre soutien. À bientôt!
            </p>
        </div>
        <div className="bottom">
            <div className="left">
                <h3>Envoyez-nous un message</h3>
                <hr />
                <form ref={form} onSubmit={sendEmail} action="">
                    <div className="input_field">
                        <label htmlFor="name">Votre nom</label>
                        <input type="text" name='user_name' placeholder='Entrez votre nom' />
                    </div>
                    <div className="input_field">
                        <label htmlFor="phone">Votre numero </label>
                        <input type="number" name="user_phone" id="" placeholder='Entrez votre numro de telephone' />
                    </div>
                    <div className="input_field">
                        <label htmlFor="email">Votre address email</label>
                        <input type="email" name="user_email" id="" placeholder='Entrez votre address emal'/>
                    </div>
                    <div className="input_field">
                        <label htmlFor="message">Votre message</label>
                        <textarea name="message" id="" cols="30" rows="7">Entrez votre message</textarea>
                    </div>
                    <div className="submit">
                        <button type="submit" value="Send">Envoyer <Send /></button>
                    </div>
                </form>
            </div>
            <div className="right">
                <h3>Nos contactes</h3>
                <hr />
                <div className="box">
                    {loading ? "loading" : data && data.map((item) => (
                            <div className="card">
                                <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.icon?.data?.attributes.url} alt="" />
                                <span>{item?.attributes?.title}</span>
                                <h3>{item?.attributes?.valeur}</h3>
                            </div>
                        )) 
                    }
                </div>
            </div>
        </div>

        <ToastContainer 
            
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            />
    </div>
  )
}

export default Contacts