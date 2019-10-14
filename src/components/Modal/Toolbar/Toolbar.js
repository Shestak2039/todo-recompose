import React from 'react';
import styled from 'styled-components';

import { Field, reduxForm } from 'redux-form';

const Toolbar = ({ addTodoItem, handleSubmit }) => (
    <div>
        <form onSubmit={handleSubmit}>
            <Label htmlFor="todoName">{'Add Todo:'}</Label>
            <Field 
                name="todoName"
                component="input"
                type="text"
                onKeyDown={addTodoItem}
            />
        </form>
    </div>
);

const Label = styled.label`

`

export default reduxForm({
    form: 'todo'
})(Toolbar);