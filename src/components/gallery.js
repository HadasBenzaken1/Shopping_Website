import React from "react";
import { observer } from "mobx-react";
import { imgStore } from "../data/imgStore";
import Details from "./details";
import { Link, useLocation } from "react-router-dom";


const Gallery = () =>{
    const location = useLocation();
    return(
    <div>
        <h4>OUR PRODUCTS::</h4>
        <div style={{  marginRight: "40px",
                       marginLeft: "40px",
                       marginTop: "40px",
                       display: "flex",
                       flexWrap: "wrap",
                       justifyContent: "center"}}>
             {imgStore.img.map(i => (<div key={i.id} style={{
                margin: "6px",
                float: "right", }}>
               
             <div style={{margin: "15px"}}> NAME: {i.name} | PRICE: {i.price}<br/>
             <Link to={`${ location.pathname }/${i.name}`}>{<img src={i.src} width="120px" style={{ borderStyle:"solid", borderWidth: "2px",borderColor: "grey",marginTop: "10%"}}></img>}</Link>
             </div> </div>)  ) }
        </div>
    </div>
       )
}
export default observer(Gallery);