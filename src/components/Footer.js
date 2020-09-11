import React, { useState } from 'react';
import FooterContent from './FooterContent';


const Footer = ({ background, color, footerLinks}) => {

    return (
        <footer
            className="responsive-footer"
            style={{ background: background }}>
            <div class="container">
                <div class="row">
                    <div class="column-66">
                        <h1 class="large-font" style={{ color: color }}><b>Comienza tu membresía gratis</b></h1>
                      
                        <p class ='small-font' ><span>Subscribete ahora y obtén un beneficio exclusivo</span></p>
                        <button class="button">Subscríbete ahora</button>
                        <hr class='line-separator'></hr>     
                        <FooterContent footerLinks={footerLinks} ></FooterContent>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                    
                        <p class='small-font'>asistensi.com © 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;