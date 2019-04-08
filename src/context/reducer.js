
// ACTIONS
const INITIAL = "INITIAL";
const LOADING_FINISH = "LOADING_FINISH";
const SET_RANGE_PRICE = "SET_RANGE_PRICE";
const SET_CATEGORY = "SET_CATEGORY";
const SET_SORT_PRICE = "SET_SORT_PRICE";
const UPDATE_USER_POINTS = "UPDATE_USER_POINTS";
const UPDATE_LIST_RESULT = "UPDATE_LIST_RESULT";
const SET_PAGE = "SET_PAGE";
const CLEAN_PAGINATION = "CLEAN_PAGINATION";
const PAGE_SIZE = 10;



// ACTIONS CREATORS
export const getInitialData = data => ({ type: INITIAL, data });
export const setLoadingFalse = () => ({ type: LOADING_FINISH });
export const handleChangeRange = data => ({ type: SET_RANGE_PRICE, data });
export const handleChangeCategorie = data => ({ type: SET_CATEGORY, data })
export const handleChangePrice = data => ({ type: SET_SORT_PRICE, data });
export const updateUserPoints = data => ({ type: UPDATE_USER_POINTS, data });
export const updateListResult = data => ({ type: UPDATE_LIST_RESULT, data });
export const setPage = data => ({type: SET_PAGE, data});
export const cleanPagination = () => ({type: CLEAN_PAGINATION});


// REDUCER WE

export const reducer = (state, action) => {
    let newFilter;
    let actualPage;
    let newPagination;
    let pagination;

    switch (action.type) {
        case INITIAL:
            return action.data;

        case LOADING_FINISH:
            return Object.assign({}, state, { isLoading: false });

        case CLEAN_PAGINATION:
            newPagination = { pageSize: PAGE_SIZE, page: 1 }
            pagination = Object.assign({}, state.filters, { pagination: newPagination })
            return Object.assign({}, state, { filters: pagination });

        case UPDATE_USER_POINTS:
            let user = Object.assign({}, state.user, { points: action.data })
            return Object.assign({}, state, { user });

        case UPDATE_LIST_RESULT:
            return Object.assign({}, state, { listResult: action.data });


        case SET_RANGE_PRICE:
            newFilter = Object.assign({}, state.filters, { range: { max: action.data.max, min: action.data.min } })
            return Object.assign({}, state, { filters: newFilter });

        case SET_PAGE:
            actualPage = state.filters.pagination.page + action.data;
            newPagination = { pageSize: PAGE_SIZE, page: actualPage }
            pagination = Object.assign({}, state.filters, { pagination: newPagination })
            return Object.assign({}, state, { filters: pagination });

        case SET_CATEGORY:
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