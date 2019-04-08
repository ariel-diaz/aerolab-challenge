import React, { useContext } from 'react'
import styled from 'styled-components';
import Logo from '../assets/images/aerolab-logo.svg';
import Coin from '../assets/icons/coin.svg';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';

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
    font-family: "Source Sans Pro";
    font-size: 18px;
    color:#616161;
    text-align:left;
    margin-right: 10px;
    font-weight: 600;
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
    font-family: "Source Sans Pro";
    font-size: 18px;
    color:#616161;
    text-align:left;
    padding: 0 20px;
`;

const HistoryText = styled.span `
    font-family: "Source Sans Pro";
    font-size: 18px;
    color:#616161;
    text-align:left;
    margin: 0 10px;
`;





const Nav = () => {

    const { state } = useContext(Context);
    const { isLoading, user } = state;
    return (
        <Navbar>
            <NavbarLeft>
                <Link to={'/'}>
                   <img src={Logo} href="/" alt="Aerolab Logo" />
                </Link>
            </NavbarLeft>
            {!isLoading &&
                <NavbarRight>
                    <UserName> {user.name}</UserName>
                  
                  {(user.redeemHistory.length > 0)
                     && <Link to={'history'}> 
                        <HistoryText> My History  </HistoryText>
                     </Link>}
                    <Points>
                        <PointText> {user.points} </PointText>
                        <img src={Coin} alt="Coins" />
                    </Points>
                </NavbarRight>}
        </Navbar>
    )

}

export default Nav;