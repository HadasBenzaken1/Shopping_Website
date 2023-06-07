import React from "react";
import { cart } from "../data/cart";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react";

const MyCart= () =>{
    const currentCart=cart.cart;

    const handleRemove = id => {
      cart.remove(id);
   }

   const location = useLocation();
  
   const itemsInCart = cart.cart
   var pay = 0;
   itemsInCart.map(element => (pay += element.price))

    return(       
        <div>
          <h3>YOUR CART:</h3>
          {currentCart.map(element => (  
          <li key={element.id}>  
              NAME: {element.name} | PRICE: {element.price}
              <div> <img src={element.src} width="100px" style={{ borderStyle:"solid", borderWidth: "2px",borderColor: "grey",marginTop: "1%"}}></img>  </div>         
              <button style={{marginBottom: "30px"}} onClick={() => handleRemove(element.id)}>REMOVE</button> </li> 
               ))}   
               {pay>0 ? <div>PRICE TO PAY: {pay}</div> && <Link to={`${ location.pathname }/pay`}><button>FOR PAY</button></Link> : <div>THE CART IS EMPTY</div> }
         </div>
       
    )
}

export default observer(MyCart);