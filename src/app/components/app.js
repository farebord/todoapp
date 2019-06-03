import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoForm from './todoForm'
import TodoList from './todoList'
import { fetchTodos } from '../actions/actions'

const App = ({status, todos, fetchTodoList}) => {
    useEffect(() => {
        fetchTodoList()
    }, [])
    return (
        <div>
            <h1>Todo list</h1>
            <TodoForm />
            {status === 'loading' && <i>Loading...</i>}
            {status !== 'loading' && <TodoList todos={todos}  />}
        </div>
    )
}

App.propTypes = {
    fetchTodoList: PropTypes.func,
    status: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired
}

const mapStateToProps = store => ({
    todos: store.todos, 
    status: store.status
})

const mapDispatchToProps = dispatch => ({
    fetchTodoList: () => dispatch(fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)