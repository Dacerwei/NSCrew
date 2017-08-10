import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaIcons from './MediaIcons';
import '../../assets/styles/basic.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className='footer-container'>
                <div className='footer-logo-wrapper'>
                    <h1 className='footer-logo-source'>Naughty Swing</h1>
                </div>
                <ul className='footer-nav-list'>
                    <NavLink to="/about" ><li className='footer-nav-list-item'>About Us</li></NavLink>
                    <NavLink to="/portfolio" ><li className='footer-nav-list-item'>Portfolio</li></NavLink>
                    <NavLink to="/cooperative" ><li className='footer-nav-list-item'>Co-op</li></NavLink>
                    <NavLink to="/classes" ><li className='footer-nav-list-item'>Classes</li></NavLink>
                    <NavLink to="/swingevents" ><li className='footer-nav-list-item'>Swing Events</li></NavLink>
                </ul>
                <MediaIcons />
                <div className='footer-info-wrapper'>
                    <p className="footer-info-content">Contact Us : naughtyswingtw@gmail.com</p>
                    <p className="footer-info-content">Copyright © 2015 Naughty Swing. All rights reserved.</p>
                    <p className="footer-info-content">SITE BY CHINWEI HSU</p>
                </div>
            </footer>
        );
    }
};
export default Footer;