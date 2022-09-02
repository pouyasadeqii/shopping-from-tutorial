import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';


// Context
import { cartContext } from '../../context/CartContextProvider';


// Icon
import shopicon from "../../../public/assets/shop.svg";

// Style
import styles from "./Navbar.module.css"


const NavBar = () => {

    const {state} = useContext(cartContext)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to='/products'>Products</Link>
                <div className={styles.iconContainer}>
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