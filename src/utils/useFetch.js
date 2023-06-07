import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const useFetch = path => {

    const [data,setData] = useState();
    
    useEffect(() => {
        axios.get('./products.json')
        .then(({ data }) => {
            setData(data);
        });
    }, []);

    return { data };
}

export default useFetch;