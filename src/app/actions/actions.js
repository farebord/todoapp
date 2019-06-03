import { TODOS_FETCHED, FETCH_ERROR, UPDATE_TODO, ADD_TODO, DELETE_TODO } from './actionsTypes'

function todos(data) {
    return {
        type: TODOS_FETCHED,
        payload: data
    }
}

function add(data){
    return {
        type: ADD_TODO,
        payload: data
    }
}

function update(data){
    return {
        type: UPDATE_TODO,
        payload: data
    }
}

function remove(data){
    return {
        type: DELETE_TODO,
        payload: data
    }
}

function fetchError(err) {
    return {
        type: FETCH_ERROR,
        payload: err
    }
}

export function updateTask(task) {
    return dispatch => {
        fetch(`http://localhost:3000/task/${task.id}`,{
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(
            response => response.json(),
            err => dispatch(fetchError(err))
        )
        .then(json =>
            dispatch(update(json))
        )
    }
}

export function deleteTask(task_id) {
    return dispatch => {
        fetch(`http://localhost:3000/task/${task_id}`,{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(
            response => response.json(),
            err => dispatch(fetchError(err))
        )
        .then(json =>
            dispatch(remove(json))
        )
    }
}

export function addTask(task) {
    return dispatch => {
        fetch(`http://localhost:3000/task`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then(
            response => response.json(),
            err => dispatch(fetchError(err))
        )
        .then(json =>
            dispatch(add(json))
        )
    }
}

export function fetchTodos() {
    return dispatch => {
      fetch('http://localhost:3000/task')
        .then(
            response => response.json(),
            err => dispatch(fetchError(err))
        )
        .then(json =>
            dispatch(todos(json))
        )
    };
}

