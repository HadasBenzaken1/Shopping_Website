import React from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { imgStore } from "../data/imgStore";
import { cart } from "../data/cart"

const Details = props =>{
    const { name } = useParams()
    const currentProduct=imgStore.getProductByName(name)|| imgStore.getProductById(props.id);
    
    const handleAdd = id => {
       cart.add(id);
    }

    return(
        <div>
            <img src={currentProduct.src} width="180px" style={{ borderStyle:"solid", borderWidth: "2px",borderColor: "grey",marginTop: "5%"}}></img>
            <p>NAME: {currentProduct.name}</p>
            <p>DESCRIPTION: {currentProduct.description}</p>
            <p>PRICE: {currentProduct.price}</p>
            <p>PRODUCT ID: {currentProduct.id}</p>
            <button onClick={() => handleAdd(currentProduct.id)}>ADD TO CART</button>
        </div>
    )
}
export default observer(Details);