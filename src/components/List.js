import React, { useContext } from 'react'
import Card from './Card';
import styled from 'styled-components';
import { Context } from '../context/Context';
import Loading from './Loading';

const ContainerCards = styled.ul`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;


const List = ({ list }) => {
    const { state } = useContext(Context);
    const { user } = state;


    return (
        <ContainerCards>
            {
                list && list.length > 0 ?
                    list.map((p, i) => <li className="item-card" key={i}>
                        <Card product={p} user={user} />
                    </li>)
                    : <h3> No results found </h3>
            }
        </ContainerCards>

    )
}


export default List;