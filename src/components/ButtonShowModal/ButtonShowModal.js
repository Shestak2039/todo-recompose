import React from 'react';
import styled from 'styled-components';

const ButtonShowModal = (props) => (
    <Button onClick={props.showModal}>Show Modal</Button>
); 

const Button = styled.button`
    height: 50px;
    width: 150px;
    font-size: 18px;
    margin: 300px 0 0 850px;
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

export default ButtonShowModal;