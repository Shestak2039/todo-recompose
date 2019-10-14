import React from 'react';
import styled from 'styled-components';

import ButtonHideModal from './ButtonHideModal';
import TodoList from './TodoList/TodoList';
import Toolbar from './Toolbar';

const Modal = ({ todos, addTodo, deleteTodo, maxId, show }) => (
    <BackgroundModal show={show}>
        <ModalWindow role="dialog" aria-modal="true">
            <Toolbar addTodo={addTodo} maxId={maxId} /> 
            <TodoList todos={todos} deleteTodo={deleteTodo} /> 
            <ButtonHideModal />
        </ModalWindow>
    </BackgroundModal>
);

const BackgroundModal = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 50px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, .5);
    position: absolute;
    top: 0px;
`

const ModalWindow = styled.div`
    width: 1000px;
    height: 800px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
`

export default Modal;