import React from 'react'

import { FaReact } from "react-icons/fa";

import '../components/Header.css';

function Header() {

    return (
        <nav className='nav'>
            <FaReact size="4rem" color='white' className='logo' />
            <ul className='list-items'>
                <li>Home</li>
                <li>Contact</li>
                <li>LearnMore</li>

            </ul>
        </nav>

    );

}

export default Header;