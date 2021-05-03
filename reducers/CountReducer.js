let initialState = {count:0, title: "Default title"}

function CountReducer(state = initialState,action) {
    console.log(action);
    console.log(state);
    switch(action.type) {
        case 'counter/increase':
            console.log('came in action counter/increase');
            return {...state, count:state.count+1}
        case 'counter/decrease':
            console.log('came in action counter/decrease');
            return {...state, count:state.count-1}
        case 'counter/changeTitle':
            let newState = {...state, title:action.title}
            return newState;
        default:
            return state;
    }
}
export default CountReducer;