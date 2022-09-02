import React,{createContext, useReducer} from 'react';

const initialstate = {
    selectedItem: [],
    itemCounter: 0,
    total: 0,
    checkout: false
};

const sumitems = items => {
    const itemCounter = items.reduce((total, product) => total + product.quantity, 0);
    const total = items.reduce((total, product) => (total + product.price * product.quantity),0).toFixed(2);
    return {itemCounter : itemCounter , total : total};
}

const cartReducer = (state, action) => {
    console.log(state);
    switch(action.type) {
        case "ADD_ITEM":
            if (!state.selectedItem.find(item => item.id === action.payload.id)) {
                state.selectedItem.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItem: [...state.selectedItem],
                ...sumitems(state.selectedItem),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItem.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItem: [...newSelectedItems],
                ...sumitems(newSelectedItems)
            }
        case "INCREASE":
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexI].quantity++;
            return {
                ...state,
                ...sumitems(state.selectedItem)
            }
        case "DECREASE":
            const indexD = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexD].quantity--;
            return {
                ...state,
                ...sumitems(state.selectedItem)
            }
        case "CHECKOUT":
            return {
                selectedItem: [],
                itemCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            return {
                selectedItem: [],
                itemCounter: 0,
                total: 0,
                checkout: false
            }        
        default:
            return state;    
    }
}
                
// CONTEXT
export const cartContext = createContext();

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialstate);
    return (
        <cartContext.Provider value={{state: state , dispatch: dispatch}}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContextProvider;