import React, { useEffect, useContext } from 'react'
import List from '../components/List';
import 'react-input-range/lib/css/index.css';
import { Context, paginateResult } from '../context/Context';
import {updateListResult , cleanPagination } from '../context/reducer';
import Filters from './../components/Filters';
import Footer from './../components/Footer';
import Loading from './../components/Loading';




const Main = () => {

    const { state, dispatch } = useContext(Context);
    const { user, isLoading, listResult, products, filters } = state;

    useEffect(() => {
            setFiltersToList();
    }, [filters])


    const setFiltersToList = () => {
        let changeCategorieOrRange = false;
        let listClean = products.slice(0);

        if(filters.category !== "") {
            listClean = listClean.filter(x => x.category === filters.category);
            changeCategorieOrRange = true;
        }

        if(filters.price !== "") {
            if(filters.price === 'Lowest') {
                listClean = listClean.sort( (a,b) => a.cost - b.cost )
            } else {
                listClean = listClean.sort( (a,b) => b.cost - a.cost )
            }
        }

        if(changeCategorieOrRange) {
            dispatch(cleanPagination());
        }
        
        if(!isLoading) {
            const paginate = paginateResult(listClean, filters); 
            dispatch(updateListResult(paginate));
        }
    };



    return (
        <>
            {isLoading ?
                <Loading />
                : <>
                    <Filters />
                    <List list={listResult.result} user={user} />
                    <Footer />
                </>}

        </>
    )
}


export default Main;