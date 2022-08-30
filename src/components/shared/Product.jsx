import React, { useContext } from 'react';
import { Link } from "react-router-dom"

// functions
import { shorten, isInCart, quantityCount } from "../../helper/functions"

// Icon
import trashIcon from "../../../public/assets/trash.svg"

// Context
import { cartContext } from '../../context/CartContextProvider';


const Product = ({productData}) => {


    const {state ,dispatch} = useContext(cartContext);

    return (
        <div>
            <img src={productData.image} alt="product" style={{width : '200px' ,height: '250px'}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div>
                    {quantityCount(state , productData.id) > 1 && <button onClick={() => dispatch({type: "DECREASE" , payload: productData})}>-</button>}
                    {quantityCount(state , productData.id) === 1 && <button onClick={() => dispatch({type: "REMOVE_ITEM" , payload: productData})}><img src={trashIcon} style={{width: "15px"}} /></button>}
                    {
                        isInCart(state ,productData.id) ?
                        <button onClick={() => dispatch({type: "INCREASE" , payload: productData}) }>+</button> :
                        <button onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>Add to Card</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;