import React from 'react';
import './_Nav.scss';
import {useSelector, useDispatch} from 'react-redux';
import {up , down} from '../../Redux/Actions/Actions';

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
  const hideNav = useSelector (state => state.hideNav);
  const dispatch = useDispatch();

  const handleSlide = () =>{
    window.scrollY > 50 ? dispatch(down()) : dispatch(up());
  }
  window.addEventListener('scroll', handleSlide)
    return (
        <div className='top-container'>
            <header>
                <div className='top-title'>
                  <h2 className={hideNav ? 'banner-active' : 'banner'}><a>Aye T</a></h2>
                  <p className={hideNav ? 'nav-active' : 'nav'}>Free Shipping and Hassle-Free Returns Worldwide</p>
                </div>

                <nav className={hideNav ? 'nav-active' : 'nav'}>
                    <div className='shipping'>
                      <div className='shipping-txt'>
                      <div>Shipping To:<span> $palceholder</span> </div>
                        <div className='shipping-content'>
                          <a><img src={USA}/>United States</a>
                          <a><img src={Canada}/>Canada</a>
                          <a><img src={UK}/>United Kingdom</a>
                          <a><img src={Mexico}/>Mexico</a>
                          <a><img src={Japan}/>Japan</a>
                        </div>
                      </div>
                    </div>



{/* change these depending on the API */}

                    <div className='men'>
                      <div className='men-txt'>
                      <div>Shop Men</div>
                        <div className='men-content'>
                          <a>New</a>
                          <a>Best Sellers</a>
                          <a>Shop All</a>
                          <a>Sale</a>
                        </div>
                      </div>
                    </div>

{/* change these depending on the API */}

                    <div className='women'>
                      <div className='women-txt'>
                      <div>Shop Women</div>
                        <div className='women-content'>
                          <a>New</a>
                          <a>Best Sellers</a>
                          <a>Shop All</a>
                          <a>Sale</a>
                        </div>
                      </div>
                    </div>



{/* Account */}
                    <div className='account'>
                      <div className='account-img'>
                        <img src={account}/>
                      <div className='account-content'>
                        <a className='account-title'>Manage Your Account</a>
                        <a><button>Account Login</button></a>
                        <a><button>Create Account</button></a>
                      </div>
                      </div>
                    </div>



{/* Search */}
                    <div className='search'>
                      <div className='search-img'>
                        <img src={search}/>
                      </div>
                    </div>




{/* Cart */}
                    <div className='cart'>
                      <div className = 'cart-img'>
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
                    </div>

                    <div className='search-content'>
                      <button type='submit'>
                        <img src={search}/>
                      </button>
                        <input type='text' placeholder='Search...'/>
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