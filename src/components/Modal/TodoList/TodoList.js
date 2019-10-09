import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => (
    <List>
        {todos.map((item) => <TodoItem key={item.id} todo={item} deleteTodo={deleteTodo}/>)}
    </List>
);

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
`

export default TodoList;