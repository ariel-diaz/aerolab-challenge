import React, { useEffect, useReducer } from "react";
import { getUser, getProducts } from "../api/api";
import { reducer, getInitialData, setLoadingFalse } from "./reducer";

const initialState = {
  user: {},
  products: [],
  listResult: [],
  categories: [],
  filters: {},
  isLoading: true
};

const Context = React.createContext(initialState);

const paginateResult = (list, filters) => {
  const totalCount = list.length;
  const totalPages = Math.ceil(list.length / filters.pagination.pageSize);
  const result = list.slice(
    (filters.pagination.page - 1) * filters.pagination.pageSize,
    filters.pagination.pageSize * filters.pagination.page
  );

  return { result, totalPages, totalCount };
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initState = async () => {
    const [user, products] = await Promise.all([getUser(), getProducts()]);
    const categories = [...new Set(products.data.map(x => x.category))];

    const filters = {
      price: "",
      category: "",
      pagination: {
        pageSize: 10,
        page: 1
      }
    };

    const optionPaginate = paginateResult(products.data, filters);
    const newState = Object.assign({}, state, {
      user,
      products: products.data,
      listResult: optionPaginate,
      categories,
      filters
    });
    dispatch(getInitialData(newState));
    dispatch(setLoadingFalse());
  };

  useEffect(() => {
    initState();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider, paginateResult };
