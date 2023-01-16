import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant"

export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data]

        case REMOVE_FROM_CART:
            console.log(action.data)
            console.log(data)

            return [data.filter(item => item !== action.data)]


        case REMOVE_FROM_CART:
            return []

        default:
            return data
    }
}
