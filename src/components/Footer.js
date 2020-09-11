import React, { useState } from 'react';
import FooterContent from './FooterContent';


const Footer = ({ background, color, footerLinksC1,footerLinksC2,footerLinksC3 }) => {

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
                        <div class= "footer-wrapper">    
                            <div class="footer-rows">
                                <FooterContent footerLink={footerLinksC1} ></FooterContent>
                                <FooterContent footerLink={footerLinksC2} ></FooterContent>
                                <FooterContent footerLink={footerLinksC3} ></FooterContent>
                            </div>
                        </div>
                       
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-linkedin-in"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                    
                        <p class='small-font'>asistensi.com © 2020</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;