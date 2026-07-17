import { useEffect, useState } from 'react'
import './App.css'
import Tareas from './componentes/Tareas'
import Tarea from './componentes/Tarea'
import { TAREAS } from './mocks/tareas'
import { URL_TAREAS } from './constantes/rutas'

export default function App() {
    const [tareas, setTareas] = useState(TAREAS);
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => { //Cargar el componente solo una vez
      fetch(URL_TAREAS).then(respuesta => {
        respuesta.json().then(tareas => {
          setTareas(tareas);
        })
      })
    }, []);

    async function alAnadir() {
      // const id = tareas.map(tarea => tarea.id).reduce((anterior, actual) => anterior > actual ? anterior: actual) + 1;
      
      const tarea = { descripcion, completada: false};
      
      // console.log(tareas);
      const respuesta = await fetch(URL_TAREAS, {
        method: 'POST',
        body: JSON.stringify(tarea),
        headers:{
          'Content-type': 'application/json' //De esta forma es que agrega la tarea tal como la introducimos, no lo genera
        }
      });    
      
      const tareaNueva = await respuesta.json();
      
      setTareas([tareaNueva, ...tareas]); //{ id, descripcion, completada: false }
      setDescripcion('');
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
