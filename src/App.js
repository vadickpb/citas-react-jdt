import React, { useEffect, useState } from 'react'
import { Cita } from './components/Cita';
import { Formulario } from './components/Formulario'

export const App = () => {

  //citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  //Arreglo de citas
  const [citas, setCitas] = useState([]);

  //UseEffect oara realizar alguna operacion cuando cambie el state
  useEffect(() =>{
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  },[citas, citasIniciales])

  //funcion que toma las citas actuales y agrega una nueva
  const agregarCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  //Función que elimina una cita por su id
  const eliminarCita = id => {
    const nuevaCita = citas.filter(cita => cita.id !== id);
    setCitas(nuevaCita);
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'



  return (
    <>
      <h1>Administrador de pacientes</h1>

      <div className ="container">
          <div className = "row">
              <div className ="one-half column">
                <Formulario agregarCita = {agregarCita} />
              </div>
              <div className ="one-half column">
                

                <h1>{titulo}</h1>
                {citas.map(cita => (
                  <Cita cita = {cita} key = {cita.id} eliminarCita = {eliminarCita}/>
                ))}
                
                
              </div>
          </div>
      </div>
    </>
  )
}

export default App;
