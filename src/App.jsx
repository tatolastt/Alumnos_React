import {useState} from 'react'
import Header from './Componentes/Header'
import Formulario from './Componentes/Formulario'
import ListadoPacientes from './Componentes/ListadoPacientes'

function App() {

  const [alumnos, setAlumnos] = useState([]);

   

  return (
    <div className="container mx-auto mt-20"> 
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario 
          alumnos={alumnos}
          setAlumnos={setAlumnos}
        />
        <ListadoPacientes />
      </div>
      
    </div>
  )
}

export default App
