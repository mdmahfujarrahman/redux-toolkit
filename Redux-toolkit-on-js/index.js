const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
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
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
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
                count: 0,
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
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
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrementCounter());
store.dispatch(incrementCounterByValue(9));
store.dispatch(incrementCounterByValue(9));
