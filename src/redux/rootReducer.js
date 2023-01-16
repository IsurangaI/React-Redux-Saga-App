import { combineReducers } from "redux";
import { cartData } from "./reducers/reducer";
import { productReducer } from "./reducers/productReducer";

export default combineReducers(
    {
        cartData,
        productReducer
    }
)