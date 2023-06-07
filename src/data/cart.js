
import { makeAutoObservable } from "mobx";
import { imgStore } from "./imgStore";

class Cart {
    cart= []; 

    constructor(){
        makeAutoObservable(this);
    }

add = id => {
    const item=imgStore.getProductById(id);
    const exist=this.cart.find((i => i.id === id));
    if (exist==undefined) {this.cart.push(item)}

}

remove = id => {
    const item=imgStore.getProductById(id)
    this.cart.remove(item);
}

claer = () => {
    this.cart=[];
}


}
   export const cart = new Cart();
