import React, { useEffect, useContext } from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/aerolab-logo.svg';
import Coin from '../assets/icons/coin.svg';
import { Context } from '../context/Context';

const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    height:80px;
    background:#ffffff;
    padding: 0 5vh;
`;

const NavbarRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const NavbarLeft = styled.div`

`;

const UserName = styled.span`
    font-family:SourceSansPro-Regular;
    font-size:24px;
    color:#616161;
    text-align:left;
    margin-right: 10px;
`;

const Points = styled.div`
    display: flex;
    align-items: center;
    background:#ededed;
    border-radius:100px;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

const PointText = styled.span`
    font-family:SourceSansPro-Regular;
    font-size:24px;
    color:#616161;
    text-align:left;
    padding: 0 20px;
`;


const Nav = () => {
    const { state } = useContext(Context);
    return (
                <Navbar>
                    <NavbarLeft>
                        <img src={Logo} alt="Aerolab Logo" />
                    </NavbarLeft>
                    <NavbarRight>
                        <UserName> {state && state.user.name}</UserName>
                        <Points>
                            <PointText> {state &&  state.user.points} </PointText>
                            <img src={Coin} alt="Coins" />
                        </Points>
                    </NavbarRight>
                </Navbar>
    )

}

export default Nav;