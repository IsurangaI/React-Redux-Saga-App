import {PRODUCT_LIST } from "../constant"


export const showProductList = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data = await data.json();
    return {
        type: PRODUCT_LIST,
        data
    }


}