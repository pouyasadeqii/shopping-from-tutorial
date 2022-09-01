import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';


// Context
import { cartContext } from '../../context/CartContextProvider';


// Icon
import shopicon from "../../../public/assets/shop.svg";


const NavBar = () => {

    const {state} = useContext(cartContext)
    return (
        <div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Link to='/products'>Products</Link>
                <div>
                    <Link to="/cart">
                        <img src={shopicon} alt="icon" />
                    </Link>
                    <span>{state.itemCounter}</span>
                </div>    
            </div>            
        </div>
    );
};

export default NavBar;