import { useEffect, useState } from 'react'
import './App.css'
import Tareas from './componentes/Tareas'

export default function App() {
    return <>
      <h1>Tareas</h1>

      <div>
        <input className="tarea-nueva" placeholder="Tarea nueva" />
      </div>

      <Tareas></Tareas>

      <footer>&copy;2026 Angie Rojas</footer>
    </>
    // console.log(tareas);
  }
