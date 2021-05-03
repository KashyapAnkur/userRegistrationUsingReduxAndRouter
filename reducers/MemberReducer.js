const initialState = {loggedIn: false};

function MemberReducer(state = initialState, action) {
    switch(action.type) {
        case "login": {
            return {loggedIn: action.val}
        }
        case "logout": {
            return {loggedIn: false}
        }
        default: {
            return state.loggedIn;
        }
    }
}

export default MemberReducer;