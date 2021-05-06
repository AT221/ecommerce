import React from 'react';
import './_Nav.scss';
import {useSelector, useDispatch} from 'react-redux';
import {up , down, changeBoolean} from '../../Redux/Actions/Actions';

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

//Handling Shipping Changes and Currency
import {changeShipping} from '../../Redux/Actions/Actions';
import {useHandleShipping} from '../../Functions/Shipping/shipping';


const Nav = () => {
  const hideNav = useSelector (state => state.hideNav);
  const boolean = useSelector (state => state.search);
  const dispatch = useDispatch();
  

  const handleSlide = () =>{
    window.scrollY > 50 ? dispatch(down()) : dispatch(up());
  }
  window.addEventListener('scroll', handleSlide)


  
    return (
    
         <div className={hideNav ? 'top-container-active' : 'top-container'}>
            <header className='header'>
                <div className='top-title'>
                  <h2 className={hideNav ? 'banner-active' : 'banner'}><a>Aye. T. C. Unlimited</a></h2>
                  <p className={hideNav ? 'nav-active' : 'nav'}>Free Shipping and Hassle-Free Returns Worldwide</p>
                </div>

                <nav className={hideNav ? 'nav-active' : 'nav'}>
                    <div className='shipping'>
                      <div className='shipping-txt'>
                      {useHandleShipping()}
                        <div className='shipping-content'>
                          <a onClick={()=>{dispatch(changeShipping('USA', '1'))}}><img src={USA}/>United States</a>
                          <a onClick={()=>{dispatch(changeShipping('CANADA', '2'))}}><img src={Canada}/>Canada</a>
                          <a onClick={()=>{dispatch(changeShipping('UK', '3'))}}><img src={UK}/>United Kingdom</a>
                          <a onClick={()=>{dispatch(changeShipping('MEXICO', '4'))}}><img src={Mexico}/>Mexico</a>
                          <a onClick={()=>{dispatch(changeShipping('JAPAN', '5'))}}><img src={Japan}/>Japan</a>
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
                    <div className='search' onClick={()=>dispatch(changeBoolean('SEARCH'))}>
                      <div className='search-img'>
                        <img src={search} />
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
                    {/* className={index === state ? 'slide active' : 'slide'} */}
                    <div className={boolean ? 'search-active' : 'search-content'}>
                        <img src={search}/>
                        <input className='input-txt' type='text' placeholder='Search...'/>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Nav;
