import { useForm } from "../hooks"

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onResetForm} = useForm({
        description: '',
    })

    const onFormSubmit = (e) => {
        e.preventDefault()
        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo)
        onResetForm()
    }

  return (

        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Add task"
                className="form-control" 
                name='description'
                value={description}
                onChange={onInputChange}
                />
            <button 
                type="submit"
                className="btn btn-success mt-3"
                >
                Add to list
            </button>
        </form>
  )
}
