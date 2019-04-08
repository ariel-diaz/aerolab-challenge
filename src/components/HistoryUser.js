import React, { useContext } from "react";
import { Context } from "../context/Context";
import styled from "styled-components";
import coin from "../assets/icons/coin.svg";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes
} from "date-fns";
import Loading from "./Loading";

const WrapperHistory = styled.div`
  font-family: "Source Sans Pro";
  font-size: 18px;
  color: #616161;
  margin: 0 20px;
  cursor: pointer;
`;

const BoxHistory = styled.li`
  display: flex;
  flex-direction: row;
`;

const HistoryPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

const HistoryBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HistoryDescription = styled.div`
  margin-left: 20px;
  border-left: 2px solid #ededed;
  padding: 10px 20px;
  margin-bottom: 20px;
`;

const HistoryBoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HistoryCoin = styled.img`
  margin-left: 10px;
`;

const HistoryImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const HistoryUser = () => {
  const { state } = useContext(Context);
  const { user, isLoading } = state;

  return (
    <WrapperHistory>
      {!isLoading ? (
        <ul>
          {user.redeemHistory
            .sort((a, b) => new Date(b.createDate) - new Date(a.createDate))
            .map((p, i) => (
              <HistoryCard key={i} product={p} />
            ))}
        </ul>
      ) : (
        <Loading />
      )}
    </WrapperHistory>
  );
};

const HistoryCard = ({ product }) => {
  const difDays = differenceInDays(new Date(), new Date(product.createDate));

  const difHours = differenceInHours(new Date(), new Date(product.createDate));

  const difMinutes = differenceInMinutes(
    new Date(),
    new Date(product.createDate)
  );

  return (
    <BoxHistory>
      <HistoryBoxImage>
        <HistoryImage src={product.img.url} alt={product.name} />
      </HistoryBoxImage>
      <HistoryDescription>
        <HistoryBox>
          <h3> {product.name} </h3>
          <HistoryPrice>
            <h4> {product.cost} </h4>
            <HistoryCoin src={coin} alt="points" />
          </HistoryPrice>
        </HistoryBox>
        <span>
          {" "}
          {difDays > 0
            ? difDays === 1
              ? "redeemed 1 day ago"
              : `redeemed ${difDays} days ago`
            : difHours > 0
            ? difHours === 1
              ? "redeemed 1 hour ago"
              : `redeemed ${difHours} hours ago`
            : difMinutes === 1
            ? "redeemed 1 minute ago"
            : `redeemed ${difMinutes} minutes ago`}
        </span>
      </HistoryDescription>
    </BoxHistory>
  );
};

export default HistoryUser;
