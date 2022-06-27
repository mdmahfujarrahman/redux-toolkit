const {createStore} = require('redux')

const ADD_USER = "ADD_USER"

const initialState = {
    users: ['manfuj'],
    count: 1,
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1,
            }

        default:
            state;
    }
}

const store = createStore(userReducer);

store.subscribe(() =>{
    console.log(store.getState());
})

store.dispatch(addUser('ahmed'));
store.dispatch(addUser('ahmed'));
store.dispatch(addUser('ahmed'));
store.dispatch(addUser('ahmed'));
