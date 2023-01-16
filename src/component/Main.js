import { addToCart, removeFromCart, emptyCart } from '../redux/actions/action';
import { showProductList } from '../redux/actions/productAction';

import { useDispatch } from 'react-redux';
import '../App.css';

function Main() {
    const dispatch = useDispatch();
    const product = {
        name: "iPhone-X",
        color: "Graphite",
        price: "$1000"
    }

    return (
        <div className="App">
            <button onClick={() => { dispatch(addToCart(product)) }}>Add to Cart</button>

            <button onClick={() => { dispatch(removeFromCart(product.name)) }}>Remove from Cart</button>

            <button onClick={() => { dispatch(emptyCart()) }}>Empty Cart</button>

            <div>
                <button onClick={() => { dispatch(showProductList()) }}>Show Product List</button>

            </div>


        </div>
    );
}

export default Main;
