import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTask } from '../actions/actions'

const TodoForm = ({addTask}) => {
    const [ description, setDescription ] = useState("")
    return (
        <div>
            <input autoComplete="off" placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)} /><button onClick={() => addTask({description})}>Add task</button>
        </div>
    )
}

TodoForm.propTypes = {
    addTask: PropTypes.func
}

const mapDispatchToProps = dispatch => ({
    addTask: (task) => dispatch(addTask(task))
})


export default connect(null, mapDispatchToProps)(TodoForm)