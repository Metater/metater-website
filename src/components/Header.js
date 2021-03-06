import React from 'react';
import './Header.css';
import Logo from '../images/logonocircle.png';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header' >
                <div className='header__left'>
                    <Link to="/" className="logo"><img src={Logo} alt='logo'/></Link>
                </div>
                <div className='header__right'>
                    <Link to="/">Home</Link>
                    <Link to="/games">Games</Link>
                    <Link to="/apps">Apps</Link>
                    <Link to="/utils">Utilities</Link>
                    <Link to="/other">Other</Link>
                    <a href="https://www.youtube.com/channel/UCt_TB74LqWnsWMHesLJ2KWg">YT</a>
                </div>
        </div>
    )
}

export default Header