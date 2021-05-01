import React from 'react'
import './_Checkout.scss';
import {useSelector, useDispatch} from 'react-redux';
import {increase, decrease} from '../../Redux/Actions/Actions';

const Cart = () => {

const counter = useSelector(state=>state.counter);
const dispatch = useDispatch();
    
    return (
        <div >
        <div className='title'>
        <h2>Your Cart</h2>
        </div>
        {/* whole container */}
        <div className='cartContainer'>
        <div className='topCart'>
            <img className='cartImg' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.D0kIBvOHBrVkw_hKXdxXSwHaLW%26pid%3DApi&f=1'/>
                {/* Product */}
                <ul className='cartList'>
                    <li>Hoodie Thrasher</li>
                    <li>Flame Hoodie </li>
                    <li>$450</li>
                </ul>
            <div className='quantity'>

                <button onClick={()=>dispatch(decrease())}>-</button>
                <label>{counter}</label>
                <input type='number' min='0'/>
                <button onClick={()=>dispatch(increase())}>+</button>
                <p>$450</p>
                <p>X</p>
            </div> 

            <div className='orderSummary'>
                <div className='topSummary'>
                        <h3>Order Summary</h3>
                    <div className='summary'>
                        <p>SubTotal</p>
                        <p>$450</p>
                    </div>
                    <div className='summary'>
                        <p>Estimated Shipping</p>
                        <p>Free</p>
                    </div>
                    <div className='summary'>
                    <p>Estimated Tax</p>
                    <p>$4</p>
                    </div>
                    <hr/>
                    <div className='summary'>
                    <h3>Estimated Total</h3>
                    <p>$245</p> 
                    </div>
                </div>

            <div className='promo'>
                <h4>Promo Code</h4>
                <img />
                {/* on click show */}
                <input type="text" />
                <button>Apply</button>
            </div>
        
            <div className='checkout'>
                <button>Checkout</button>
            </div>
        {/* order summary closing */}
            </div>
    

            </div>
            {/* whole container */}
        </div>
        </div>
    )
}

export default Cart;