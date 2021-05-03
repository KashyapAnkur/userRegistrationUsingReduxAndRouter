const initialState = {name: "Default Name"};

export default function MyReducer(state = initialState, action) {
    if(action.type == "india/bangalore") {
        return {name: "BTM Layout"}
    } else if(action.type == "india/shimla") {
        return {name: "Sanjauli chowk"}
    } else if(action.type == "india/chandigarh") {
        return {name: "38 West Daddu Majra"}
    } else if(action.type == "india/solan") {
        return {name: "Karol Tibba"}
    } else {
        return initialState;
    }
}