

// ACTIONS
const INITIAL = "INITIAL";
const LOADING_FINISH = "LOADING_FINISH";
const SET_RANGE_PRICE = "SET_RANGE_PRICE";
const SET_CATEGORIE = "SET_CATEGORIE";
const SET_SORT_PRICE = "SET_SORT_PRICE";



// ACTIONS CREATORS
export const getInitialData = data => ({ type: INITIAL, data });
export const setLoadingFalse = () => ({ type: LOADING_FINISH });
export const handleChangeRange = data => ({ type: SET_RANGE_PRICE, data });
export const handleChangeCategorie = data => ({ type: SET_CATEGORIE, data })
export const handleChangePrice = data => ({ type: SET_SORT_PRICE, data });


// REDUCER WE

export const reducer = (state, action) => {
    let newFilter;

    switch (action.type) {
        case INITIAL:
            return action.data;
        case LOADING_FINISH:
            return Object.assign({}, state, { isLoading: false });
        case SET_RANGE_PRICE:
            newFilter = Object.assign({}, state.filters, { range: { max: action.data.max, min: action.data.min } })
            return Object.assign({}, state, { filters: newFilter });
        case SET_CATEGORIE:
            newFilter = Object.assign({}, state.filters, { category: action.data })
            return Object.assign({}, state, { filters: newFilter });
        case SET_SORT_PRICE:
            if (state.filters.price === action.data) {
                newFilter = Object.assign({}, state.filters, { price: '' });
            } else {
                newFilter = Object.assign({}, state.filters, { price: action.data });
            }
            return Object.assign({}, state, { filters: newFilter });
        default:
            return state;
    }
}