import React, { useContext } from "react";
import styled from "styled-components";
import { Button, WrapperFilter } from "../utils/styles";
import { Context } from "../context/Context";
import { handleChangeCategorie, handleChangePrice } from "../context/reducer";
import Paginate from "./Paginate";
import TotalProducts from "./TotalProducts";

const WrapperFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #d9d9d9;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`;

const BoxFilters = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const BtnFilter = styled(Button)`
  background-color: #ededed;
  border-radius: 100px;
  padding: 10px 20px;
  font-family: "Source Sans Pro";
  font-size: 18px;
  color: #a3a3a3;
  margin-left: 10px;
`;

const Filters = () => {
  const { state, dispatch } = useContext(Context);
  const { categories, filters } = state;

  return (
    <WrapperFilters>
      <TotalProducts />

      <BoxFilters>
        <WrapperFilter>
          <h3> Category: </h3>
          <select
            onChange={e => dispatch(handleChangeCategorie(e.target.value))}
          >
            <option value=""> All </option>
            {categories.map((categorie, i) => (
              <option key={i} value={categorie}>
                {categorie}
              </option>
            ))}
          </select>
        </WrapperFilter>

        <WrapperFilter>
          <h3> Sort by: </h3>
          <BtnFilter
            onClick={() => dispatch(handleChangePrice("Lowest"))}
            className={filters.price === "Lowest" ? "activeFilter" : ""}
          >
            {" "}
            Lowest price{" "}
          </BtnFilter>
          <BtnFilter
            onClick={() => dispatch(handleChangePrice("Highest"))}
            className={filters.price === "Highest" ? "activeFilter" : ""}
          >
            {" "}
            Highest price{" "}
          </BtnFilter>
        </WrapperFilter>

        <Paginate />
      </BoxFilters>
    </WrapperFilters>
  );
};

export default Filters;
