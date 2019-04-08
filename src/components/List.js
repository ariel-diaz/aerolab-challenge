import React, { useContext } from 'react'
import Card from './Card';
import styled from 'styled-components';
import { Context } from '../context/Context';

const ContainerCards = styled.ul`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;


const ItemCard = styled.li`
    display: flex;
    justify-content: center;
    width: calc(25% - 0.5rem);
    min-width: 276px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 0;

    @media (min-width: 1500px) {
        min-width: 270px;
        width: calc(20% - 1rem);
      }
`;

const List = ({ list }) => {
    const { state } = useContext(Context);
    const { user } = state;


    return (
        <ContainerCards>
            {
                list && list.length > 0 ?
                    list.map((p, i) => <ItemCard key={i}>
                        <Card product={p} user={user} />
                    </ItemCard>)
                    : <h3> No results found </h3>
            }
        </ContainerCards>

    )
}


export default List;