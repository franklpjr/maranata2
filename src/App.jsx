import { useState } from 'react'
import Maranatalogo from './assets/Maranatalogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.instagram.com/maranata.clube/" target="_blank">
          <img src={Maranatalogo} className="logo" alt="Maranata logo" />
        </a>
      </div>
      <h1 className="title">Clube de Desbravadores Maranata</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Página em desenvolvimento. Em breve uma nova experiência na palma da sua mão!
        </p>
      </div>
      <p className="read-the-docs">
        FJR Software 2023©. Todos os direitos reservados.
      </p>
    </>
  )
}

export default App