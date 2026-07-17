import { useEffect, useState } from 'react'
import './App.css'
import Tareas from './componentes/Tareas'
import Tarea from './componentes/Tarea'
import { TAREAS } from './mocks/tareas'

export default function App() {
    const [tareas, setTareas] = useState(TAREAS);
    const [descripcion, setDescripcion] = useState('');

    function alAnadir() {
      const id = tareas.map(tarea => tarea.id).reduce((anterior, actual) => anterior > actual ? anterior: actual) + 1;
      setTareas([{ id, descripcion, completada: false }, ...tareas]);
      console.log(tareas);
    }

    return <main className="app-tareas">
      <h1>Tareas</h1>

      <div>
        <input className="tarea-nueva" placeholder="Tarea nueva" onChange={e => setDescripcion(e.target.value)}/>
        <button className="boton" onClick={alAnadir}>Añadir</button>
      </div>

      <Tareas tareas={tareas}></Tareas>

      <footer>&copy;2026 Angie Rojas</footer>
    </main>
    // console.log(tareas);
  }
