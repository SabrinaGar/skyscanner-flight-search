import React, { useState } from 'react';
import { Link, BrowserRouter as Router } from "react-router-dom";

const FooterContent= ( {footerLinks})=>{
    return(
  <div className="footer-rows">
   
    {footerLinks.map((link) =>
     <div className = "footer-columns" >
                      
            <Router>
                <Link
                className="footer-links"
                    to={link.path}
                >   {link.text}
                </Link>
            </Router>
        
        </div>
    )}
     
</div>
)

}
export default FooterContent;