import React, {useContext} from 'react'
import Card from './Card';
import styled from 'styled-components';
import { reedemProduct } from './../api/api';
import { Context } from '../context/Context';

const ContainerCards = styled.ul`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const List = ({list}) => {
    const {state} = useContext(Context);
    const {user} = state;

    const reedemItem = (id) => {
        reedemProduct(id).then(resp => {
           if(resp.status === 200) {
                console.log(resp.data.message);
           }
        });
    }

    return (
       <ContainerCards>
          {list && list.length > 0 ?
            list.map( (p, i) => <li key={i}> 
            <Card product={p} reedemProduct={reedemItem} user={user} />
            </li>)
            : <h3> NO HAY PRODUCTOS </h3>}
       </ContainerCards>


    )
}


export default List;