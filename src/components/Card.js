import React from 'react'
import styled from 'styled-components';
import {Button} from '../utils/styles.js';
import buyWhite from '../assets/icons/buy-blue.svg';
import buyBlue from '../assets/icons/buy-white.svg';
import coin from '../assets/icons/coin.svg';


const WrapperCard = styled.div `
    background:#ffffff;
    box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
    margin-bottom: 20px;
    padding: 2vh;

    :hover {
        
    }
`;


const BtnBuy = styled(Button)`
    background: url(${buyWhite}) center no-repeat;
    border-radius: 50%;
    border-radius: 50%;
    background-size: contain;
    padding: 2vh;
    position: absolute;
    right: 0;

`;

const WrapperImage = styled.div`
    position: relative;
    border-bottom: 1px solid #d9d9d9;
`;

const WrapperDescription = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2vh;
`;

const MessageCoin = styled.div`
    background-color:#616161;
    border-radius: 100px;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1vh 2vh;
    opacity:0.8;
`;

const TextCoin = styled.span`
font-family:SourceSansPro-Regular;
font-size:2vh;
color:#ffffff;
margin-right: 5px;
`;




const Card = ({product , reedemProduct, user }) => {

    const canBuy = product.cost <= user.points;
    const pointsMissing = product.cost - user.points;
    
    return (
        <WrapperCard>
            <WrapperImage>
                <img src={product.img.url} alt={product.name}/>
                {canBuy ? <BtnBuy onClick={() => reedemProduct(product._id, product.cost)} /> : 
                <MessageCoin> 
                    <TextCoin> You need {pointsMissing} </TextCoin>
                    <img className="coin" src={coin} alt="Coins" />
                </MessageCoin>}
            </WrapperImage>
            <WrapperDescription>
                <span className="productCategory"> {product.category} - {product.cost }</span>
                <span className="productName"> {product.name} </span>
            </WrapperDescription>
        </WrapperCard>
    )

}


export default Card;