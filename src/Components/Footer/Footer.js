import React from 'react';
import './_Footer.scss';

const Footer = () => {
    return(
        <footer>
            <div className='list-container'>
                <ul>
                    <li>About</li>
                    <hr/>
                    <li>Our Story</li>
                    <li>Collections</li>
                    <li>Retailers</li>
                </ul>
                    <hr className='divider'/>
                <ul>
                    <li>Help</li>
                    <hr/>
                    <li>Shipping and FAQ</li>
                    <li>Returns and Exchanges</li>
                </ul>
                     <hr className='divider'/>
                <ul>
                    <li>Contact</li>
                    <hr/>
                    <li>support@ayetseeunlimited.com</li>
                    <li> 1 (800) 182-8821</li>
                </ul>
                <ul className='newsletter'>
                    <li>Join Our Newsletter</li>
                    <hr/>
                    <li>Join our newletter to get updates on products, news, and special offers.</li>
                    <li>
                        <input type='text'/>
                        <button />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer ;