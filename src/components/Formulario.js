import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Formulario = () => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    const [error, setError] = useState(false)
    
    //funcion que ejecuta cada vez que el usuario escribe en un input
    const handleInputChange = (e) => {
        e.preventDefault();
        
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //extraer valores
    const {mascota, propietario, fecha, hora, sintomas} = cita

    const submitCita = (e) => {
        e.preventDefault();

        //Validar
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true)
            return;
        }

        //Eliminar mensaje previo
        setError(false);

        //Asignar un Id
        cita.id = uuidv4();
        console.log(cita);
    }
    
    return (
        <>
        <h2>Crear Cita</h2>

        { error ? <p className = "alerta-error">Todos los campos son obligatorios</p> : ''}
        
        <form onSubmit = {submitCita}>
            <label>Nombre de Mascota</label>
            <input
                type ="text"
                name = "mascota"
                placeholder = "Nombre de la mascota"
                className = "u-full-width"
                onChange = {handleInputChange}
                value = {mascota}
            />

            <label>Nombre del Dueño</label>
            <input
                type ="text"
                name = "propietario"
                placeholder = "Nombre del dueño de la mascota"
                className = "u-full-width"
                onChange = {handleInputChange}
                value = {propietario}
            />

            <label>Fecha</label>
            <input
                type ="date"
                name = "fecha"
                className = "u-full-width"
                onChange = {handleInputChange}
                value = {fecha}
            />

            <label>Hora</label>
            <input
                type ="time"
                name = "hora"
                className = "u-full-width"
                onChange = {handleInputChange}
                value = {hora}
            />

            <label>Sintomas</label>
            <textarea
                name = "sintomas"
                className = "u-full-width"
                onChange = {handleInputChange}
                value = {sintomas}
            >
            </textarea>

            <button 
                type = "submit" 
                className = "u-full-width button-primary">
                    Agregar cita
                </button>
        </form>
        </>
    )
}
