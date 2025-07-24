import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item => { }),
    removeItem: (id => { })
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const updatedItems = [...state.items];

        if (existingItem >= 0) {
            const existingItem = state.items[existingItemIndex];
            const updatedItems = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            };
            updatedItems[existingItemIndex] = updatedItems;
        }
        else {
            updatedItems.push({ ...action.item, quantity: 1 });
        }

        return { ...state, items: updatedItems };
    }

    if (action.type === 'REMOVE_ITEM') {

    }

    return state;
}

export function CartContextProvider({ children }) {
    useReducer(cartReducer, { items: [] });

    return (
        <CartContext>{children}</CartContext>
    )
}

export default CartContext;