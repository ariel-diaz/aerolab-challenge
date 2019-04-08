import React, {useContext} from 'react'
import {Context} from '../context/Context';
import { Button } from '../utils/styles';
import styled from 'styled-components';
import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';
import { setPage } from '../context/reducer';

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


const Paginate = () => {
    const { state, dispatch } = useContext(Context);
    const { listResult, filters } = state;
    return (
        <>
            {listResult.totalPages > 1 &&
                <>
                    {filters.pagination.page > 1 && <BtnArrowLeft onClick={() => dispatch(setPage(-1))} />}
                    {filters.pagination.page < listResult.totalPages && <BtnArrowRight onClick={() => dispatch(setPage(1))} />}
                </>
            }
        </>
    )
}

export default Paginate;