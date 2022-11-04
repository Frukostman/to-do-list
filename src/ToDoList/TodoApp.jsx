import { useTodos } from "../hooks"
import { TodoAdd, TodoList } from "./"

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodos()

  return (
    <>
        <h4>All to do's: ({todosCount})- Pending: {pendingTodosCount}</h4>
        <hr />
        <div className="row">
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo} 
                    onToggleTodo={handleToggleTodo}
                />
            </div>
            <div className="col-5">
                <h6>Add a new task to do:</h6>
                <hr />
                <TodoAdd 
                    onNewTodo={handleNewTodo}
                />                
            </div>
        </div>
    </>
  )
}
