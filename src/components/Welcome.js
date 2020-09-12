import React, { useState } from 'react';
import Background from '../assets/img/background-img.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Welcome = () => {


    return (
        <div className="container">
            <div className="welcome-wrapper" >
                <div className="text-wrapper">
                <h1 className= "large-font" style={{color:' #EC3434'}} >Jobantalent</h1>
                <h1 className="large-font" style={{color:'#200840'}}>Trae los mejores beneficios para ti</h1>
                <p className ="smoll-font">Si eres un colaborador de Jobandtalent, recibe tu primer mes de membresía
                asistensi completamente GRATIS (prueba gratuita); una vez finalice el
                período de prueba, si deseas continuar con nosotros, podrás disfrutar de tu
                primer año de membresía con un 10% de descuento</p>
                </div>
                <br></br>
               
            </div>
            <div className ="button-wrapper">
            <Router>
                        <Link
                            to={'/Flights'}
                            >
                         <button className="button">Parte II</button>
                        </Link>
                     </Router>
           
                <h2 className="medium-font">Más Información</h2>
            </div>
        </div>
    )
}

export default Welcome;