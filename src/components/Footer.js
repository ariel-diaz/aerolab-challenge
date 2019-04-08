import React from "react";
import Paginate from "./Paginate";
import TotalProducts from "./TotalProducts";
import styled from "styled-components";

const WrapperFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid #d9d9d9;
`;

const Footer = () => {
  return (
    <WrapperFooter>
      <TotalProducts />
      <Paginate />
    </WrapperFooter>
  );
};

export default Footer;
