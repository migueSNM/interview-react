import React from 'react';
import styled from 'styled-components';


const Box = styled.div`
    display: block;
    float: left;
    width: 16.66%;
    text-align: center;
`;

const Text = styled.p`
    text-align: center;
`;

const BenefitBox = (props) => (
    <Box>
        <img src={props.img} alt="Benefit"/>
        <Text>{props.text}</Text>
    </Box>
);

export default BenefitBox;