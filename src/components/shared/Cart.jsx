import React, { useContext } from 'react';

// ontext
import { cartContext } from '../../context/CartContextProvider';

// Functions
import {shorten} from "../../helper/functions";

// Icon
import trashIcon from '../../../public/assets/trash.svg'

// Style
import styles from "./Cart.module.css";

const Cart = (props) => {

    const {dispatch} = useContext(cartContext);
    const {image, title, price, quantity} = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ? <button onClick={() => dispatch({type: "DECREASE" , payload: props.data})}>-</button> : 
                    <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props.data})}><img src={trashIcon}/></button>
                }
                <button onClick={() => dispatch({type: "INCREASE" , payload: props.data}) }>+</button>
            </div>
        </div>
    );
};

export default Cart;