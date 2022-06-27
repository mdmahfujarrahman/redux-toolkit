import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstant";

const initialState = {
    isLoading : false,
    todos: [],
    error: null
}

const todosReducer =(state= initialState, action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                isLoading: false
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                error: action.payload,
            }
            
    
        default:
            return state;
    }

}

export default todosReducer;