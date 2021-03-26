import React from 'react';
import './_Nav.scss';


//Flags
import USA from '../Images/Flags/USA.png';
import UK from '../Images/Flags/UK.png';
import Canada from '../Images/Flags/Canada.png';
import Mexico from '../Images/Flags/Mexico.png';
import Japan from '../Images/Flags/Japan.png';


//Icons
import account from '../Images/Navbar/account.png';

import cart from '../Images/Navbar/cart.png';
import search from '../Images/Navbar/search.png';





// add java to on click replace usd to whatever content on click replace the header with img + currency abreviation
const Nav = () => {
    return (
        <div>
            <header>
                <div>
                <h2><a>Aye T</a></h2>
                <p>Free Shipping and Hassle-Free Returns Worldwide</p>
                </div>
                <nav>
                    <div className='shipping'>
                    <h3>Shipping To:<span> $palceholder</span></h3>
                    <div className='shipping-content'>
                      <a><img src={USA}/>United States</a>
                      <a><img src={Canada}/>Canada</a>
                      <a><img src={UK}/>United Kingdom</a>
                      <a><img src={Mexico}/>Mexico</a>
                      <a><img src={Japan}/>Japan</a>
                    </div>
                    </div>



{/* change these depending on the API */}

                    <div className='men'>
                    <h3>Shop Men</h3>
                    <div className='men-content'>
                      <a>New</a>
                      <a>Best Sellers</a>
                      <a>Shop All</a>
                      <a>Sale</a>
                    </div>
                    </div>

{/* change these depending on the API */}

                    <div className='women'>
                    <h3>Shop Women</h3>
                    <div className='women-content'>
                      <a>New</a>
                      <a>Best Sellers</a>
                      <a>Shop All</a>
                      <a>Sale</a>
                    </div>
                    </div>



{/* Account */}
                    <div className='account'>
                    <img src={account}/>
                    <div className='account-content'>
                      <a>Manage Your Account</a>
                      <a><button>Account Login</button></a>
                      <a><button>Create Account</button></a>

                    </div>
                    </div>



{/* Search */}
                    <div className='search'>
                    <img src={search}/>
                    <div className='search-content'>
                        <input type='search'/>
                    </div>
                    </div>




{/* Cart */}
                    <div className='cart'>
                    <img src={cart}/>
                    <div className='cart-content'>
                      <a>
                      {/* this is going to be img depending on the product */}
                      <img src=''/>
                      {/* this is going to be text depending on the product */}
                      <a>T-shirt og</a>
                      <p>$Price</p>
                      </a>
                      <button> View Your Bag</button>
                      <p>Free International Shipping</p>

                    </div>
                    </div>
       



                </nav>
            </header>
        </div>
    )
}

export default Nav;
// $USA
// £GBP
// $CAD
// $MXN
// ¥JPY