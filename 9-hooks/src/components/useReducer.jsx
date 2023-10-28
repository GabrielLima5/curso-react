import { useReducer, useState } from "react"

export default function HookUseReducer(){
    // começando com useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    // avançando em useReducer
    const initialTasks = [
        {id: 1, text: 'Fazer alguma coisa'},
        {id: 2, text: 'Fazer outra coisa'}
    ]

    const taskReducer = (state, action) => {
        switch(action.type){
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskName
                }

                setTaskName('')

                return [...state, newTask]

            case "DELETE":
                return state.filter(task => task.id !== action.id)

            default:
                return state
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatchTasks({ type: "ADD" })
    }

    const removeTask = id => {
        dispatchTasks({type: "DELETE", id: id})
    }

    const [taskName, setTaskName] = useState('')
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks)

    return(
        <div>
            <h2>useReducer</h2>
            <p>Número: {number}</p>
            <button onClick={dispatch} type="button">Alterar número</button>
            <h3>Tarefas:</h3>
            {tasks.map(task => (
                <li onDoubleClick={() => removeTask(task.id)} key={task.id}>{task.text}</li>
            ))}
            <form onSubmit={handleSubmit}>
                <input type="text" value={taskName} onChange={e => setTaskName(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
            <hr />
        </div>
    )
}