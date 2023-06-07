import React from "react";
import { Link } from "react-router-dom";
import { cart } from "../data/cart";

const End=()=>{
    cart.claer();
    return(
        <div>          
            <h2>THANK YOU FOR YOUR ORDER!</h2><br/>
            <Link to="/"><button>BACK TO HOME PAGE</button></Link>
        </div>
    )
}
export default End;