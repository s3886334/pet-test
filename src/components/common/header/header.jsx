import React from 'react';
import { Navbar } from '../../common';
import './Header.css'
function Header() {

    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top__logo">
                    <a href="/" className="header-logo">LOGO</a> 
                </section>
                <section className="header-top__navbar">
                    <Navbar />
                </section>
                <hr className="header-top__seperator" />
            </section>
            <section className="header-bottom">
                <section className="header-bottom__phone">
                    999999999
                </section>
                <section className="header-bottom__email">
                    @gmail.com
                </section>
            </section>
        </section>
    )
}

export default Header;