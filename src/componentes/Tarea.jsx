import './Tarea.css'

export default function Tarea({ tarea }) {
    return <label className="tarea">
        <input type="checkbox" checked={tarea.completada}/>{tarea.descripcion}
    </label>
}