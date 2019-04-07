import React from 'react';
import styled from 'styled-components';
import { Header } from './utils/styles';
import Nav from './components/Nav';
import Main from './pages/Main';
import BannerImg from './assets/images/header-x2.png';
import { ContextProvider } from './context/Context';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detalle from './pages/Detalle';
import HistoryUser from './components/HistoryUser';

const Wrapper = styled.div`
    margin: 0 80px;
    
`;


const Banner = styled.div`
      background: url(${BannerImg}) 60% no-repeat;
     background-size: cover;
        height: 40vh;
        width: 100%;
        display: flex;
        align-items: flex-end;
`;

const Title = styled.h1`
    font-family: SourceSansPro-Bold;
    color: #ffffff;
    font-size: 5vw;
    padding: 0 10vh;
`;



const App = () => {
  return (
    <Router>
      <ContextProvider>
        <Wrapper>
          <Header>
            <Nav />
            <Banner>
              <Title>Electronics</Title>
            </Banner>
          </Header>

          <Route exact path="/" component={Main} />
          <Route path="/history" component={HistoryUser} />
          <Route path="/detallePedido" component={Detalle} />
        </Wrapper>
      </ContextProvider>
    </Router>
  );
}

export default App;
