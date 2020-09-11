import React, { useState } from 'react';
import { Link,BrowserRouter as Router } from "react-router-dom";


const NavBar = ({ background, hoverBackground, linkColor, navLinks, logo }) => {
    const [ navOpen, setNavOpen ] = useState(0)
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    return (
        <nav
            className="responsive-toolbar"
            style={{ background: background }}>
            <ul
                style={{ background: background }}
                className={ navOpen ? 'active' : '' }
            >
                <figure className="image-logo" onClick={ () => { setNavOpen(!navOpen) } }>
                    <img src={ logo } height="40px" width="200px" alt="toolbar-logo" />
                    <i class="fas fa-bars"></i>
                </figure>
                { navLinks.map((link, index) => 
                    <li
                        key={ index }
                        onMouseEnter={ () => { setHoverIndex(index) } }
                        onMouseLeave={ () => { setHoverIndex(-1) } }
                        style={{ background: hoverIndex === index ? (hoverBackground || '#999') : '' }}
                    >
                        <Router>
                        <Link
                            to={link.path}
                            style={{ color: linkColor, float: 'right' }}
                        >   { link.text }
                        </Link>
                     </Router>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar;