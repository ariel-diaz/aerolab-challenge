import React, {useContext} from 'react'
import Card from './Card';
import styled from 'styled-components';
import { reedemProduct } from './../api/api';
import { Context } from '../context/Context';
import {updateUserPoints} from '../context/reducer';

const ContainerCards = styled.ul`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;


const List = ({list}) => {
    const {state, dispatch} = useContext(Context);
    const {user} = state;



    const reedemItem = (id, cost) => {
        reedemProduct(id).then(resp => {
           if(resp.status === 200) {
               let newUserPoints = user.points - cost; 
               dispatch(updateUserPoints(newUserPoints));

           }
        });
    }

    return (
       <ContainerCards>
          {list && list.length > 0 ?
            list.map( (p, i) => <li className="item-card" key={i}> 
            <Card product={p} reedemProduct={reedemItem} user={user} />
            </li>)
            : <h3> NO HAY PRODUCTOS </h3>}
       </ContainerCards>


    )
}


export default List;