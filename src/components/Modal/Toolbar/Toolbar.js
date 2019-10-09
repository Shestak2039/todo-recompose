import React from 'react';
import styled from 'styled-components';

const Toolbar = ({ addTodoItem }) => (
    <main>
        <Label htmlFor="add-todo">{'Add Todo:'}</Label>
        <Input id="add-todo" onKeyDown={addTodoItem}/>
    </main>
);

const Input = styled.input`
    width: 170px;
    height: 30px;
    margin-top: 15px;
`

const Label = styled.label`

`

export default Toolbar;