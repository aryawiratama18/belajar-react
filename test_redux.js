const redux = require('redux');

const initialState =  {
    value: 0,
    age: 21
}

// Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_AGE':
                return {
                    ...state,
                    age: state.age + 1
                }
        case 'CHANGE_VALUE':
        return {
            ...state,
            value: state.value = action.newValue
        }
    default:
        return state;

    }
}
// Store
const store = redux.createStore(rootReducer);
console.log(store.getState()) // age = 21

// Subscription
store.subscribe(() => {
    console.log('store change ', store.getState())
})

// Dispatch
store.dispatch({type: 'ADD_AGE'})
store.dispatch({type: 'CHANGE_VALUE',newValue: 12}) // action nya ada 2, type dan newValue
console.log(store.getState()) // age = 22
