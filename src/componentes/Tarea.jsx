import { useState } from 'react';
import './Tarea.css'

export default function Tarea({ tarea }) {
    const [marcada, setMarcada] = useState(tarea.completada); //hocks para relacionar los estados del elementos concreto

    return <label className="tarea">
        <input type="checkbox" checked={marcada} onChange={() => setMarcada(!marcada)}/>{tarea.descripcion}
    </label>
}