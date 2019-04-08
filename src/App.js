import React from "react";
import styled from "styled-components";
import { Header } from "./utils/styles";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import BannerImg from "./assets/images/header-x2.png";
import { ContextProvider } from "./context/Context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HistoryUser from "./components/HistoryUser";

const Banner = styled.div`
  background: url(${BannerImg}) 60% no-repeat;
  background-size: cover;
  height: 40vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const Title = styled.h1`
  font-family: "Source Sans Pro";
  font-weight: 600;
  color: #ffffff;
  font-size: 5vw;
  padding: 0 10vh;
`;

const WrapperContent = styled.div`
  margin: 0 80px;
`;

const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Header>
          <Nav />
          <Banner>
            <Title>Electronics</Title>
          </Banner>
        </Header>

        <WrapperContent>
          <Route exact path="/" component={Main} />
          <Route path="/history" component={HistoryUser} />
        </WrapperContent>
      </ContextProvider>
    </Router>
  );
};

export default App;
