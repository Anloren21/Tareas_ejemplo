import Tarea from "./Tarea"
import './Tareas.css'

export default function Tareas() {
    return <ul className="tareas">
        <li><Tarea></Tarea></li>
        <li><Tarea></Tarea></li>
        <li><Tarea></Tarea></li>
        <li><Tarea></Tarea></li>
    </ul>
}