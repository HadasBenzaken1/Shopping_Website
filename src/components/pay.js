// import React from "react";
import React, { useState } from "react";
import { Link , useLocation} from "react-router-dom";
import { cart } from "../data/cart";
import End from "./endOrder";

const Pay = () => {

    const location = useLocation();
    const itemsInCart = cart.cart
    var pay = 0;
    itemsInCart.map(element => (pay += element.price))
    var flag=false;

    const [creditCardNum, setCreditCardNum] = useState('');
    const [validity, setValidity] = useState('');
    const [digits, setDigits] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    };

    return (
        <div><br />PRICE TO PAY: {pay}
            <form onSubmit={handleSubmit}><br/>
                <input type="text" placeholder="enter credit car number" onChange={e => setCreditCardNum(parseInt(e.target.value))} /><br/>
                <input type="date" placeholder="enter validity" onChange={e => setValidity(parseInt(e.target.value))} /><br/>
                <input type="text" placeholder="3 digits on the back of the card" onChange={e => setDigits(parseInt(e.target.value))} /><br/>
                <br/><Link to={`${ location.pathname }/endOrder`}><button type="submit">ENTER</button></Link>
            </form>
        </div>
    )
}
export default Pay;