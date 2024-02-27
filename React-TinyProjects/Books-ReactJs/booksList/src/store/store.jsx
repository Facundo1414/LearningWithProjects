import {createContext, useContext, useEffect, useState} from 'react';

// en este componente se deberia guardar en una api los datos

const AppContext = createContext({
    items : [],
    createItem: (item) => {}, 
    getItem: (id) => {},
    updateItem: (item) => {} 
});


export default function Store({children}) {
    const [items, setItems] = useState([]);

    function createItem(item) {
        const temp = [...items];
        temp.push(item)
        setItems(temp);
    }

    function getItem(id) {
        const item = items.find((item) => item.id === id)
        return item;
    }

    function updateItem(item) {
        const index = items.findIndex((it) => it.id === item.id)
        const temp = [...items];

        temp[index] = {... item}
    }

    return (
        <AppContext.Provider value={{
            items,
            createItem,
            getItem,
            updateItem
        }
        }>
            {children}
        </AppContext.Provider>
    )
}


export function useAppContext(){
    return useContext(AppContext);
}