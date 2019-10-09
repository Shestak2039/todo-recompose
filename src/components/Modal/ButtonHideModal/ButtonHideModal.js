import React from 'react';
import styled from 'styled-components';

const ButtonHideModal = ({ hideModal }) => (
    <Button onClick={hideModal}>Hide Modal</Button>
); 

const Button = styled.button`
    height: 30px;
    width: 100px;
    font-size: 16px;
    background-color: white;
    color: black;
    box-shadow: 0px 0px 5px black; 
    cursor: pointer;

    &:hover {
        box-shadow: 0;
        color: white;
        background-color: black;
    }
`

export default ButtonHideModal;