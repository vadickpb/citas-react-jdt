import React from 'react'
import PropTypes from 'prop-types'

export const Cita = ({cita, eliminarCita}) => {

    const {mascota, propietario, fecha, hora, sintomas } = cita
    return (
        <div className = "cita">
            
            <p>Mascota: <span>{ mascota }</span></p>
            <p>Propietario: <span>{ propietario }</span></p>
            <p>fecha: <span>{ fecha }</span></p>
            <p>hora: <span>{ hora }</span></p>
            <p>Sintomas: <span>{ sintomas }</span></p>

            <button 
                className = "button eliminar u-full-width"
                onClick = {() => eliminarCita(cita.id)}
                >
                Eliminar &times;
            </button>
        </div>
    )
}

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
