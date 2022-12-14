function Alumno({alumno}) {
  return (
        <div className="m-10 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}<span className="font-normal normal-case">{alumno.nombre}</span></p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Clase Actual {""}<span className="font-normal normal-case">{alumno.clase}</span></p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Email {""}<span className="font-normal normal-case">{alumno.email}</span></p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha De Alta: {""}<span className="font-normal normal-case">{alumno.fecha}</span></p>

                <p className="font-bold mb-3 text-gray-700 uppercase">Datos a Agregar {""}<span className="font-normal normal-case">{alumno.datos}</span></p>
        </div>
    )
}

export default Alumno;