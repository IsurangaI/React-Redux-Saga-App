import { PRODUCT_LIST } from "../constant"

export const productReducer = (data = [], action) => {

    switch (action.type) {
        case PRODUCT_LIST:
            console.log("Product Reducer is called")
            return []

        default:
            return data
    }
}
