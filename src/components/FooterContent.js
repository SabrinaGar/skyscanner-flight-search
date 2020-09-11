import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";

const FooterContent= ( {footerLink  })=>{
    return(
  
    <div class = "footer-columns" >
    {footerLink.map((link) =>
        <a class= "footer-links"                         
        
        >
            <Router>
                <Link
                    to={link.path}
                >   {link.text}
                </Link>
            </Router>
        </a>
    )}
</div>
)

}
export default FooterContent;