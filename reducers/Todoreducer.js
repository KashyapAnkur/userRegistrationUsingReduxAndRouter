const initialState = {todo:[]};

function Todoreducer(state = initialState, action) {
    switch(action.type) {
        case "todo/add": {
            return {todo: state.todo.concat(action.newTodo)}
        }
        case "todo/delete": {
            let temp = [...state.todo];
            let newArr = temp.filter( (val,index) => {
                if(action.index === index)
                return false;
                else
                return true;
            });

            return {todo: newArr}
        }
        case "todo/deleteAll": {
            return {todo: []}
        }
        default : {
            return initialState;
        }
    }
}

export default Todoreducer;