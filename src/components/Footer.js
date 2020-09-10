import React, { useState } from 'react';
import { Link,BrowserRouter as Router } from "react-router-dom";


const NavBar = ({ background, hoverBackground, linkColor, navLinks, logo }) => {
    const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    return (
        <div
            className="responsive-footer"
            style={{ background: background }}>
            <ul
                style={{ background: background }}
                className={ navOpen ? 'active' : '' }
            >
                <span className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                    <p>Info</p>
                </span>
              
            </ul>
        </div>
    )
}

export default NavBar;