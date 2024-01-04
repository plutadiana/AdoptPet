import localStorage from "local-storage";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
    const storageItems = sessionStorage.getItem('cartsItems');
    const [items, setItems] = useState(storageItems === null ? [] : JSON.parse(storageItems));

    const addItem = (item) => {
        let cartsItems = [...items, item];
        sessionStorage.setItem('cartsItems', JSON.stringify(cartsItems));
        setItems(cartsItems);
    }

    const removeAll = () => {
        setItems([]);
    }

    const removeItem = (item) => {
        const index = items.findIndex(i => i.id === item.id);

        if (index !== -1) {
            items.splice(index, 1);
        }
        setItems([...items]);
    }

    return (<CartContext.Provider value={{
        items: items,
        addItem: addItem,
        removeAll: removeAll,
        removeItem: removeItem
    }}>
        {props.children}
    </CartContext.Provider>)
}