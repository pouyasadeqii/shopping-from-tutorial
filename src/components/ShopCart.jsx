import React,{useContext} from 'react';
import Cart from './shared/Cart';
import { Link } from 'react-router-dom';

// Context
import { cartContext } from '../context/CartContextProvider';

// Style
import styles from "./ShopCart.module.css";


const ShopCart = () => {

    const {state , dispatch} = useContext(cartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItem.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {
                state.itemCounter > 0 && <div className={styles.payments}>
                    <p><span>Total items:</span>{state.itemCounter}</p>
                    <p><span>Total payments:</span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button className={styles.checkout} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
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