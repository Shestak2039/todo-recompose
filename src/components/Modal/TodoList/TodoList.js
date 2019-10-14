import React from 'react';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => (
    <List>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
    </List>
);

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
`

export default TodoList;