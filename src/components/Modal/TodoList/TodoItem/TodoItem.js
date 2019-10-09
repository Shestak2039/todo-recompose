import React from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo: {message}, deleteTodoItem }) => {
    return  (
    <Todo>
        <Text>{message}</Text>
        <DeleteButton onClick={deleteTodoItem}>Delete</DeleteButton>
    </Todo>
)}

const DeleteButton = styled.button`
    width: 50px;
    height: 20px;
    background-color: white;
    box-shadow: 1px 1px 3px rgb(170, 0, 240);
    cursor: pointer;
    border: 0;

    &:hover {
        background-color: rgb(182, 96, 240);
    }
`

const Todo = styled.li`
    width: 300px;
    height: 50px;
    border: 1px solid black;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Text = styled.p`
    font-size: 14px;
    margin: 0;
`

export default TodoItem;