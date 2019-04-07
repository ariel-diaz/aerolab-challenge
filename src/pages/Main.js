import React, { useEffect, useState, useContext } from 'react'
import List from '../components/List';
import 'react-input-range/lib/css/index.css';
import { Context } from '../context/Context';
import Filtros from './../components/Filtros';




const Main = () => {

    const { state, dispatch } = useContext(Context);
    const { user, products, categories, filters, listResult, isLoading } = state;

    // const [listResult, setListResult] = useState([]);
    // // const [categories, setCategories] = useState([]);
    // const [filters, setFilters] = useState(initialFilters || initialFilters2);


    // useEffect(() => {
    //     if(products && products.length > 0) {
    //         setFiltersToList();
    //     }

    // }, [filters])

    // useEffect(() => {
    //     if(products && products.length > 0) {
    //         setFiltersToList();
    //     }

    // }, [])

    // const getProductsList = async () => {
    //     // const result =  await getProducts();
    //     // const listCategories = getCategories(products);
    //     // setCategories(listCategories);
    //     setFiltersToList();
    // }

    // const handleChangeCategorie = (e) => {
    //     const newFilters = Object.assign({}, filters, {category: e.target.value});
    //     setFilters(newFilters);
    // }


    // const handleChangeRange = (value) => {
    //     const newFilters = Object.assign({}, filters, {range: {max: value.max, min: value.min} })
    //     setFilters(newFilters)

    // } 


    // const setFiltersToList = () => {
    //     let listClean = products.slice(0);

    //     if(filters.category !== "") {
    //         listClean = listClean.filter(x => x.category === filters.category);
    //     }


    //     listClean = listClean.filter(x => x.cost >= filters.range.min && x.cost < filters.range.max);


    //     if(filters.price !== "") {
    //         if(filters.price === 'Lowest') {
    //             listClean = listClean.sort( (a,b) => a.cost - b.cost )
    //         } else {
    //             listClean = listClean.sort( (a,b) => b.cost - a.cost )
    //         }
    //     }

    //     setListResult(listClean)
    // };



    return (
        <>
            {isLoading ?
                "Loading..."
                : <>
                    <Filtros />
                    <List list={listResult} user={user} />
                </>}

        </>
    )
}


export default Main;