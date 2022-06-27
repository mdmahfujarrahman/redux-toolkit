
const { default: axios } = require("axios")
const { createStore, applyMiddleware} = require("redux")
const { default: thunk } = require("redux-thunk")
const fetch = require("node-fetch");


const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"
const API_URL = "https://jsonplaceholder.typicode.com/todos";


 const initialTodo = {
    todos: [],
    isLoading: false,
    error: null,
 }


 const getTodos = () => {
    return {
        type: GET_TODOS_REQUEST,
    };
 }
 const successTodos = (todos) => {
    return {
        type: GET_TODOS_SUCCESS,
        payload: todos,
    };
 }
 const failTodos = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error,
    };
 }


 const todosReducer = (state = initialTodo, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            };
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };

        default:
            return state;
    }
 }

 const fetchData =() => {
        return (dispatch) => {
            dispatch(getTodos());

            // fetch(API_URL, {
            //     method: 'GET',
            // })
            // .then(res => res.json())
            // .then(data => console.log(data))
            axios.get(API_URL)
            .then(res => {
                const todos = res.data
                const titles = todos.map(t => t.title)
                dispatch(successTodos(titles));
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(failTodos(errMsg));
            })
        }

 }


 const store = createStore(todosReducer, applyMiddleware(thunk));

 store.subscribe(() => {
    console.log(store.getState());
 })

 store.dispatch(fetchData())