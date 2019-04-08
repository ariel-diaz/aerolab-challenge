import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Button } from "../utils/styles.js";
import buyWhite from "../assets/icons/buy-blue.svg";
import buyBlue from "../assets/icons/buy-white.svg";
import coin from "../assets/icons/coin.svg";
import { Context } from "../context/Context";
import { updateUserPoints } from "../context/reducer.js";
import { reedemProduct } from "../api/api";
import imgLoading from "../assets/images/loading.gif";

const WrapperCard = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 2vh;
  transition-duration: 0.6s;
  min-width: 250px;
  min-height: 250px;
  margin-bottom: 20px;

  :hover {
    top: -10px;
    -webkit-box-shadow: 17px 23px 23px -19px rgba(0, 0, 0, 0.67);
    -moz-box-shadow: 17px 23px 23px -19px rgba(0, 0, 0, 0.67);
    box-shadow: 17px 23px 23px -19px rgba(0, 0, 0, 0.67);
  }
`;

const WrapperCardHover = styled.div`
  background-image: linear-gradient(
    -180deg,
    rgba(10, 212, 250, 0.7) 0%,
    rgba(37, 187, 241, 0.7) 100%
  );
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const BtnBuyBlue = styled(Button)`
  background: url(${buyBlue}) center no-repeat;
  border-radius: 50%;
  border-radius: 50%;
  background-size: contain;
  padding: 2vh;
  position: absolute;
  right: 0;
  z-index: 999;
`;

const WrapperImage = styled.div`
  position: relative;
  border-bottom: 1px solid #d9d9d9;
`;

const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2vh;
`;

const MessageCoin = styled.div`
  background-color: #616161;
  border-radius: 100px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  padding: 1vh 2vh;
  opacity: 0.8;
`;

const TextCoin = styled.span`
  font-family: "Source Sans Pro";
  font-size: 2vh;
  color: #ffffff;
  margin-right: 5px;
`;

const ButtonRedeem = styled(Button)`
  background: #ffffff;
  opacity: 1 !important;
  font-family: "Source Sans Pro";
  border-radius: 100px;
  font-size: 18px;
  padding: 10px 60px;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WrapperPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TextPrice = styled.span`
  font-size: 36px;
  color: #ffffff;
  padding-bottom: 10px;
`;

const Loading = styled.img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
`;

const CoinImg = styled.img`
  margin-left: 10px;
`;

const ProductName = styled.span`
  font-family: "Source Sans Pro";
  font-size: 18px;
  color: #616161;
  letter-spacing: -0.04px;
  text-align: left;
`;
const ProductCategory = styled.span`
  font-family: "Source Sans Pro";
  font-size: 16px;
  color: #a3a3a3;
  letter-spacing: -0.04px;
  text-align: left;
`;

const Coin = styled.img`
  width: 18px;
  height: 18px;
`;

const Card = ({ product, user }) => {
  const [isHover, setIsHover] = useState(false);
  const [isRedeem, setRedeem] = useState(false);
  const { dispatch } = useContext(Context);
  const canBuy = product.cost <= user.points;
  const pointsMissing = product.cost - user.points;

  const reedemItem = (id, cost) => {
    setRedeem(true);
    reedemProduct(id).then(resp => {
      if (resp.status === 200) {
        let newUserPoints = user.points - cost;
        dispatch(updateUserPoints(newUserPoints));
        setRedeem(false);
      }
    });
  };

  return (
    <WrapperCard
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <WrapperImage>
        <img src={product.img.url} alt={product.name} />
        {canBuy ? (
          isHover ? (
            <BtnBuyBlue />
          ) : (
            <BtnBuy />
          )
        ) : (
          <MessageCoin>
            <TextCoin> You need {pointsMissing} </TextCoin>
            <Coin className="coin" src={coin} alt="Coins" />
          </MessageCoin>
        )}
      </WrapperImage>
      <WrapperDescription>
        <ProductCategory> {product.category} </ProductCategory>
        <ProductName> {product.name} </ProductName>
      </WrapperDescription>

      {isHover && (
        <WrapperCardHover>
          <WrapperPrice>
            <TextPrice> {product.cost} </TextPrice>
            <CoinImg src={coin} alt="Coins" />
          </WrapperPrice>
          {canBuy && (
            <ButtonRedeem
              onClick={() => reedemItem(product._id, product.cost)}
              disabled={isRedeem ? "disabled" : ""}
            >
              {" "}
              Redeem Now
              {isRedeem && <Loading src={imgLoading} />}
            </ButtonRedeem>
          )}
        </WrapperCardHover>
      )}
    </WrapperCard>
  );
};

export default Card;
