import { compose, withHandlers } from 'recompose';

import Toolbar from './Toolbar';

export default compose(
    withHandlers({
        addTodoItem: ({ addTodo, maxId }) => (event) => {
            if (event.key === 'Enter' && event.target.value !== '') {
                addTodo({id: maxId + 1, message: event.target.value});
                event.target.value = ''
            }
        }
    }),
)(Toolbar);