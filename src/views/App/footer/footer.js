import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => (
    <footer className='footer'>
        <p>© {currentYear}</p>
    </footer>
);

export default Footer;
