import React,{useContext} from 'react';
import { useParams,Link } from "react-router-dom"

import { ProductsContext } from '../context/ProductContextProvider';


const ProductDetails = () => {
    const param = useParams();

    const data = useContext(ProductsContext);
    const product =data[param.id - 1];
    const {image , title ,description , price , category} = product;
    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category :</span>{category}</p>
                <div>
                    <span>{price} $</span>
                    <Link to='/products'>Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;