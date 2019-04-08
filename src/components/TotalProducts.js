import React, { useContext } from 'react'
import { Context } from '../context/Context';
import styled from 'styled-components';


const WrapperTotalProducts = styled.div`
    font-family: "Source Sans Pro";
    display:flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 18px;

    @media (max-width: 800px) {
        flex-direction: row-reverse;
        width: 100%;
        justify-content: space-between;
      }
`;

const TextProducts = styled.span`
    font-size: 18px;
`;  

const TextPage= styled.em`
`;

  
const TotalProducts = () => {
    const { state } = useContext(Context);
    const { listResult, filters } = state;

    return (
        <WrapperTotalProducts>
            <TextProducts>  {listResult.result.length} of {listResult.totalCount} products </TextProducts>
            <TextPage> Page {filters.pagination.page} </TextPage>
        </WrapperTotalProducts>
    )
}


export default TotalProducts;