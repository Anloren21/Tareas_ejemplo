import Tarea from "./Tarea"
import './Tareas.css'

export default function Tareas({ tareas }) {
    return <ul className="tareas">
        {tareas.map(tarea => <li key={tarea.id}><Tarea tarea={tarea}></Tarea></li>)}
    </ul>
}