import React, { useState } from 'react';
import '../Style/Header.css';
import { Link } from 'react-router';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
            <>
            
                        <section className="header-banner-wrapper">
           
           <Link to={"/"}>

                     <header>
                <div className="container">
                    <div className={`header-wrapper ${menuOpen ? 'active' : ''}`}>
                        <h4 className="logo"><span>M</span>etatro<span>N</span><span>C</span>ube</h4>

                        <div className="hamburger" onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </header>

           </Link>
        </section>
            
            </>
    );
};

export default Header;
