import React from 'react';
import styled from 'styled-components';

const ButtonHideModal = ({ handleHide }) => (
    <Button onClick={handleHide}>Hide Modal</Button>
); 

const Button = styled.button`
    height: 30px;
    width: 100px;
    font-size: 16px;
    background-color: white;
    color: black;
    box-shadow: 0px 0px 5px black; 
    cursor: pointer;
    margin: 15px 10px 0 0;

    &:hover {
        box-shadow: 0;
        color: white;
        background-color: black;
    }
`

export default ButtonHideModal;