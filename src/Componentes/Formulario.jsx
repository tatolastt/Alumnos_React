import {useState, useEffect} from 'react';
import Erorr from './Erorr';


function Formulario({alumnos,setAlumnos}) {
  const [nombre, setNombre] = useState("");
  const [clase, setClase] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [datos, setDatos] = useState("");

  const [error, setError] = useState(false);


  function generarId () {

    // creacion de un numero random lo transformamos a string y le sacamos los primeros dos numeros
    const random = Math.random().toString(36).substr(2);

    //creacion de la fecha actual y la transformamos a string 
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  


  const handleSubmit = (e) => {
    e.preventDefault(); //Previene el comportamiento por defecto del formulario que es recargar la pagina

    //validacion del formulario

    if([nombre, clase, email, fecha, datos].includes("")){
      setError(true);
      return; 
    }

    console.log("Formulario Enviado");
    setError(false);
 
    // objeto de alumno

    const objetoAlumno = {
      nombre,
      clase,
      email,
      fecha,
      datos,
      id: generarId()
    }
       
    setAlumnos([...alumnos, objetoAlumno]);

    //reiniciar el formulario
    setNombre("");
    setClase("");
    setEmail("");
    setFecha("");
    setDatos("");
  }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5" >
      <h2 className="font-black text-3xl text-center">Seguimiento Alumnos</h2>
      <p className="text-lg mt-5 text-center mb-10">Añade tus alumnos y {""} <span className="text-indigo-600 font-bold ">Administralos</span> </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>

        {error && <Erorr mensaje="todos los componentes son obligatorios"/>}
        
        <div className="mb-5">
          <label htmlFor="nombre" className="block text-center text-gray-700 font-bold uppercase">Nombre Alumno</label>
          <input id="nombre" type="text" placeholder="Nombre del Alumno" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        </div>
        
        <div className="mb-5">
          <label htmlFor="clase" className="block text-center text-gray-700 font-bold uppercase">Clase que participa</label>
          <input id="clase" type="text" placeholder="Que tipo de clase toma" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md" value={clase} onChange={(e) => setClase(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-center text-gray-700 font-bold uppercase">Email</label>
          <input id="email" type="email" placeholder="Inserte el email del alumno" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-center text-gray-700 font-bold uppercase">Fecha del Alta</label>
          <input id="alta" type="date" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md" value={fecha} onChange={(e) => setFecha(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="datos" className="block text-center text-gray-700 font-bold uppercase">Datos a Agregar</label>
          <textarea id="datos" className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-md" placeholder="Datos a Agregar" value={datos} onChange={(e) => setDatos(e.target.value)}></textarea>
        </div>
        
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente"/>

      </form>
    </div>
  )
}

export default Formulario;