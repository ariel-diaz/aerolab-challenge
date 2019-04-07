import React, {useEffect, useReducer } from 'react';
import { getUser, getProducts } from '../api/api';
import {reducer, getInitialData, setLoadingFalse} from './reducer';



const initialState = {
    user: {},
    products: [],
    listResult: [],
    categories: [],
    filters: {},
    isLoading: true
}

const Context = React.createContext(initialState);



const ContextProvider = ({children}) => {
     const [state, dispatch] = useReducer(reducer, initialState);
    // const [state, setState] = useState(initialState);

    const initState = async () => {
        const [user, products] = await Promise.all([getUser(), getProducts()]);

        const categories = [...new Set(products.data.map(x => x.category))];

        const filters = {
            price: '',
            category: '',
            range: {
                min: 0,
                max: user.points
            }
        }
        
        const newState = Object.assign({}, state,
             { user, 
               products: products.data, 
               listResult: products.data,
               categories,
               filters
            });

        dispatch(getInitialData(newState));

        // aldope
        dispatch(setLoadingFalse());
    };

    useEffect( () => {
         initState();
    },[]);

    return (
        <Context.Provider value={{state, dispatch}}>
         {children}
        </Context.Provider>
    );

}



export {Context, ContextProvider} ;