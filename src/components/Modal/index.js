import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';

import { connectModal } from 'redux-modal';

import Modal from './Modal';

import { addTodoAction, deleteTodoAction } from '../../actions/todo-actions';

const mapStateToProps = ({todoState: { todos }}) => ({ todos })

const mapDispatchToProps = (dispatch) => (
    {
        addTodo: (todo) => {
            dispatch(addTodoAction(todo));
        },
        deleteTodo: (todo) => {
            dispatch(deleteTodoAction(todo));
        }
    }
)

export default connectModal({ name: 'modal' })(compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps(({ todos }) => {
        return { maxId: Math.max(...todos.map((item) => item.id)) }
    }),
)(Modal));