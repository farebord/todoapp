import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateTask, deleteTask } from '../actions/actions';

const TodoItem = ({id, description, done, switchDone, deleteTask}) => {
    return (
        <div><input type="checkbox" onChange={() => switchDone({id, done: !done})} checked={done} />{description}<button onClick={() => deleteTask(id)}>&times;</button></div>
    )
}

TodoItem.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    done: PropTypes.bool.isRequired,
    switchDone: PropTypes.func,
    deleteTask: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
    switchDone: task => dispatch(updateTask(task)),
    deleteTask: id => dispatch(deleteTask(id))
})


export default connect(null, mapDispatchToProps)(TodoItem);