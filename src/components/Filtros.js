import React, { useContext, useEffect } from 'react';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import InputRange from 'react-input-range';
import styled from 'styled-components';
import { Button } from '../utils/styles';
import { Context } from '../context/Context';
import { handleChangeRange, handleChangeCategorie, handleChangePrice } from '../context/reducer';

const WrapperFiltros = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #d9d9d9;
    align-items: center;
    `;

const BtnArrowLeft = styled(Button)`
    background: url(${arrowLeft}) no-repeat;
    height: 50px;
    width: 50px;
`;

const BtnArrowRight = styled(Button)`
    background: url(${arrowRight}) no-repeat;
    height: 50px;
    width: 50px;
    margin-left: 10px;
`;


const BtnFilter = styled(Button)`
    background-color: #ededed;
    border-radius: 100px;
    padding: 10px 20px;
    font-family:SourceSansPro-Regular;
    font-size:3vh;
    color:#a3a3a3;
    margin-left: 2vh;
`;


const WrapperRange = styled.div`
    width: 25%;
`;


const Filtros = () => {
    const { state, dispatch } = useContext(Context);
    const { user, products, filters, categories, listResult } = state;


    return (
        <WrapperFiltros>
            <div>
                <span>  {listResult.length} of {products.length} products </span>
            </div>

            {
                user ? <WrapperRange>
                    <InputRange
                        maxValue={3000}
                        minValue={0}
                        formatLabel={value => `${value} points`}
                        value={filters.range}
                        step={100}
                        onChange={(value) => dispatch(handleChangeRange(value))} />
                </WrapperRange>
                    : ""
            }

            <div>
                <label> Categoria: </label>
                {categories && categories.length > 0
                    ? <select onChange={dispatch((e) => handleChangeCategorie(e.target.value))}>
                        <option value=""> Todas </option>
                        {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                    </select>
                    : ""}
            </div>

            <div>
                <BtnFilter onClick={() => dispatch(handleChangePrice('Lowest'))} className={filters.price === "Lowest" ? "activeFilter" : ""}> Lowest price </BtnFilter>
                <BtnFilter onClick={() => dispatch(handleChangePrice('Highest'))} className={filters.price === "Highest" ? "activeFilter" : ""}> Highest price </BtnFilter>
            </div>

            <div>
                <BtnArrowLeft />
                <BtnArrowRight />
            </div>

        </WrapperFiltros>

    )


}



export default Filtros;