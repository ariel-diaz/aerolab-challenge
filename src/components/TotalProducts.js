import React, {useContext} from 'react'
import { Context } from '../context/Context';

const TotalProducts = () => {
    const { state } = useContext(Context);
    const { listResult , filters} = state;

    return (
        <div className="container-total-products">
            <span>  {listResult.result.length} of {listResult.totalCount} products </span>
            <em> Page {filters.pagination.page} </em>
        </div>
    )
}


export default TotalProducts;