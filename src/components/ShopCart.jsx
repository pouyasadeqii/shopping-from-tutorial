import React,{useContext} from 'react';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';

// Context
import { cartContext } from '../context/CartContextProvider';


const ShopCart = () => {

    const {state , dispatch} = useContext(cartContext);

    return (
        <div>
            <div>
                {state.selectedItem.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemCounter > 0 && <div>
                    <p><span>Total items:</span>{state.itemCounter}</p>
                    <p><span>Total payments:</span>{state.total}</p>
                    <div>
                        <button onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div>
                    <h3>Checked Out Successfully</h3>
                    <Link to='/products'>Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemCounter === 0 && <div>
                    <h3>Want To Buy?</h3>
                    <Link to='/products'>Go Back To Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;