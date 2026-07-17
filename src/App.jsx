import { useEffect, useState } from 'react'
import './App.css'
import Tareas from './componentes/Tareas'
import { TAREAS } from './mocks/tareas'

export default function App() {
    return <>
      <h1>Tareas</h1>

      <div>
        <input className="tarea-nueva" placeholder="Tarea nueva" />
      </div>

      <Tareas tareas={TAREAS}></Tareas>

      <footer>&copy;2026 Angie Rojas</footer>
    </>
    // console.log(tareas);
  }
