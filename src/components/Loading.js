
import React from 'react'
import styled from 'styled-components';
import loadingGif from '../assets/images/loading.gif';

const WrapperLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 400px;
`;

const Img = styled.img`
    width: 100px;
`;



const Loading = () => { 

    return (
        <WrapperLoading>
            <Img src={loadingGif} alt="loading..." />
        </WrapperLoading>
    )

}

export default Loading;