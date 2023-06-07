import React from "react";
import axios from "axios";
import { makeAutoObservable } from "mobx";

class ImgStore {
    img= []; 

    constructor(){
        makeAutoObservable(this);

        axios.get('./products.json')
            .then(({ data }) => {
                this.img = data;
        });
        
    }

    getProductById = id => {
        return this.img.find(i => i.id === id);
    }

    getProductByName = name => {
        return this.img.find(i => i.name?.includes(name) || name?.includes(i?.name));
    }


}
   export const imgStore = new ImgStore();
