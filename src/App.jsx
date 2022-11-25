import React from 'react'
import Header from './Componentes/Header'
import Formulario from './Componentes/Formulario'
import ListadoPacientes from './Componentes/ListadoPacientes'

function App() {
  return (
    <div className="container mx-auto mt-20"> 
      <Header />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>
      
    </div>
  )
}

export default App
