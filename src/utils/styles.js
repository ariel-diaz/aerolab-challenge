import styled from 'styled-components';


export const Header = styled.header`

`;


export const Button = styled.button`
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;

   :focus {
       outline:0;
    }
`;

export const WrapperFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Source Sans Pro";
`;
