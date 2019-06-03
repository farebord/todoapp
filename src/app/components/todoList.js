import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'

const TodoList = ({ todos }) => {
    return (
        <div>
            {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

TodoList.defaultProps = {
    todos: []
}

export default TodoList