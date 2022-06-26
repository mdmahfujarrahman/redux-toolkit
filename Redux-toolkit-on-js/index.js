const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

//state
const initCounterState = {
    count: 0,
};

//action

const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};
const resetCounter = () => {
    return {
        type: RESET,
    };
};

//create reducer for counter
const counterReducer = (state = initCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            state;
    }
};

//store - getState(), dispatch(), subscribe()

//create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//dispatch Action Action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
