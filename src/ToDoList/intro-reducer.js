const todoReducer = (state = {}, action = {}) => {

    if(action.type === 'add todo') {
        return [...state, action.payload ]
    }
    return state
}

let todos = todoReducer()

todos = todoReducer(todos, addTodoAction)