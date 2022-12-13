import Alumno from "./Alumno"
function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
        <h2 className="font-black text-3xl text-center">ListadoAlumnos</h2>
        <p className="text-xl mt-5 bm-10 text-center">Administra tus {""} <span className="text-indigo-600 font-bold">Alumnos</span></p>        

        <Alumno/>
        <Alumno/>
        <Alumno/>
        <Alumno/>
    </div>
    
  )
}

export default ListadoPacientes