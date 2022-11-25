
function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5" >
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade tus alumnos y {""} <span className="text-indigo-600 font-bold ">Administralos</span> </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-center text-gray-700 font-bold uppercase">Nombre Alumno</label>
          <input id="nombre" type="text" placeholder="Nombre del Alumno" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"/>
        </div>
        
        <div className="mb-5">
          <label htmlFor="clase" className="block text-center text-gray-700 font-bold uppercase">Clase que participa</label>
          <input id="clase" type="text" placeholder="Que tipo de clase toma" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-center text-gray-700 font-bold uppercase">Email</label>
          <input id="email" type="email" placeholder="Inserte el email del alumno" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-center text-gray-700 font-bold uppercase">Fecha del Alta</label>
          <input id="alta" type="date" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md"/>
        </div>

        <div className="mb-5">
          <label htmlFor="datos" className="block text-center text-gray-700 font-bold uppercase">Datos a Agregar</label>
          <textarea id="datos" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md" placeholder="Datos a Agregar"></textarea>
        </div>
        
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente"/>

      </form>
    </div>
  )
}

export default Formulario;