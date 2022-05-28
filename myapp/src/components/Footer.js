import React from 'react'

import { BiCopyright } from "react-icons/bi";

import '../components/Footer.css'

function Footer(){

    return(
        <footer className='footer'>
        <div>
        <BiCopyright/>
        2022
            </div>
        <p>Suraj Development</p>
        <h5>All right reserved</h5>
        
        </footer>

    );
        
}

export default Footer;