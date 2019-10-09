import { compose, withHandlers } from 'recompose';

import TodoItem from './TodoItem';

export default compose(
    withHandlers({
        deleteTodoItem: ({ todo, deleteTodo }) => () => {
            deleteTodo(todo);
        }
    }),
)(TodoItem);