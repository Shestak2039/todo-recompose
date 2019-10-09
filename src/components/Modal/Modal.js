import React from 'react';
import styled from 'styled-components';

import ButtonHideModal from './ButtonHideModal';
import TodoList from './TodoList/TodoList';
import Toolbar from './Toolbar';

const Modal = ({ todos, addTodo, deleteTodo, maxId }) => (
    <BackgroundModal>
        <ModalWindow>
            <ButtonHideModal />
            <Toolbar addTodo={addTodo} maxId={maxId}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </ModalWindow>
    </BackgroundModal>
);

const BackgroundModal = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: 50px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .8);
`

const ModalWindow = styled.div`
    width: 1000px;
    height: 800px;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-left: 50px;
`

export default Modal;