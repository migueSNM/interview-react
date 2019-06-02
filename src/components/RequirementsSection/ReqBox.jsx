import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    margin: 30px 0;
    text-align: left;
`;

const Img = styled.img`
    margin-right: 20px;
`;

const Text = styled.div`
    font-size: 90%;
`;

const ReqBox = (props) => (
    <Box>
        <Img src={props.bullet} alt="Bullet"/>
        <Text>{props.text}</Text>
    </Box>
);

export default ReqBox;