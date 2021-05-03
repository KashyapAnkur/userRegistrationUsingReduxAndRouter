const changeTitleAction = localTitle => ({type: 'counter/changeTitle', title: localTitle});

const AddTodo = (todoval) => ({type: 'todo/add', newTodo: todoval})
const deleteTodo = (indexToDelete) => ({type: 'todo/delete', index: indexToDelete})
const deleteAllTodo = () => ({type: 'todo/deleteAll'})

export {changeTitleAction, AddTodo, deleteTodo, deleteAllTodo};